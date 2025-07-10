import { Mail, Phone, MapPin, User, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function AdvisorContact() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-blue-50 border border-blue-100 rounded-lg p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Contact the Academic Office
          </h2>

          <div className="space-y-4 text-sm text-gray-800">
            <div className="flex items-start gap-3">
              <MapPin className="text-blue-700 w-5 h-5 mt-1" />
              <p>
                <strong>Office Location:</strong> Block B, 2nd Floor, opposite Leadcity University Field, Ibadan, Nigeria
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-blue-700 w-5 h-5 mt-1" />
              <p>
                <strong>Phone:</strong> +234 812 345 6789
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-blue-700 w-5 h-5 mt-1" />
              <p>
                <strong>Email:</strong> masscomm@lcu.edu.ng
              </p>
            </div>
            <div className="flex items-start gap-3">
              <User className="text-blue-700 w-5 h-5 mt-1" />
              <p>
                <strong>Academic Advisor:</strong> Dr. Akin Olayemi
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="text-blue-700 w-5 h-5 mt-1" />
              <p>
                <strong>Office Hours:</strong> Mon–Fri, 8:00AM – 5:00PM
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
