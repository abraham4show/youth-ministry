import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowRight,
  FaTimes,              // <-- added for close button
} from "react-icons/fa";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Img3 from "../assets/img3.jpeg";
import { client } from "../contentful";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contentTypeId, setContentTypeId] = useState("");
  const [selectedImage, setSelectedImage] = useState(null); // <-- new state for lightbox

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Optional: log available content types for debugging
        console.log("🔍 Fetching events from Contentful...");
        const contentTypes = await client.getContentTypes();
        console.log(
          "📋 Available content types:",
          contentTypes.items.map((ct) => ct.sys.id)
        );

        // Common content type IDs you might have created for events
        const possibleTypes = [
          "hfcYouthEvent",
          "hfcEvent",
          "youthEvent",
          "event",
          "hfcYouthMinistryEvent",
        ];

        let correctType = null;
        for (const type of possibleTypes) {
          try {
            const test = await client.getEntries({
              content_type: type,
              limit: 1,
            });
            if (test.items.length > 0) {
              console.log(`✅ Found events with content type: ${type}`);
              correctType = type;
              break;
            }
          } catch (err) {
            // Type not found or error, just continue
          }
        }

        if (!correctType) {
          console.warn("⚠️ No known event content type found. Check your Contentful setup.");
          setLoading(false);
          return;
        }

        setContentTypeId(correctType);

        // Fetch all events of that type
        const response = await client.getEntries({
          content_type: correctType,
          include: 2, // to resolve linked assets (images)
        });

        console.log(`✅ Found ${response.items.length} event(s)`);

        const fetchedEvents = response.items.map((item) => {
          const fields = item.fields;

          // Extract image URL if present (optional)
          let imageUrl = null;
          if (fields.image && fields.image.fields && fields.image.fields.file) {
            imageUrl = `https:${fields.image.fields.file.url}`;
          }

          return {
            id: item.sys.id,
            title: fields.title || "Untitled Event",
            date: fields.date || "TBA",
            time: fields.time || "TBA",
            location: fields.location || "TBA",
            description: fields.description || "",
            category: fields.category || "General",
            spots: fields.spots || "Open to all",
            image: imageUrl,
          };
        });

        setEvents(fetchedEvents);
      } catch (error) {
        console.error("❌ Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Loading events...</p>
            {contentTypeId && (
              <p className="text-sm text-gray-500">Content type: {contentTypeId}</p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${Img3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Upcoming Events
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Join us for workshops, seminars, and community gatherings designed
            to develop your leadership skills and deepen your faith.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {events.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No upcoming events found.</p>
              <p className="text-gray-500">Check back soon or add events in Contentful.</p>
              {contentTypeId && (
                <p className="text-sm text-gray-400">Content type ID: {contentTypeId}</p>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  {/* Optional image (flyer) - now clickable */}
                  {event.image && (
                    <div
                      className="w-full h-48 bg-gray-200 cursor-pointer"
                      onClick={() => setSelectedImage(event.image)}
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
                        {event.category}
                      </span>
                      <span className="text-sm text-gray-500">{event.spots}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                    <p className="text-gray-600 mb-4">{event.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-2 text-gray-500">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <FaClock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <Link
                      to="/join"
                      className="w-full flex justify-center items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition"
                    >
                      Register Now <FaArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setSelectedImage(null)} // click overlay to close
        >
          <div className="relative max-w-4xl max-h-screen p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition z-10"
            >
              <FaTimes className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Full flyer"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
            />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <FaUsers className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Don't Miss Out!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Stay updated with our latest events and leadership opportunities.
            Join our community to receive notifications about upcoming programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Join Our Community
            </button>
            <button className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}