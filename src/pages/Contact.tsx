import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("contact");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({ success: false, message: "" });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/${encodeURIComponent("qai.joetsou@qai-lab.com")}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitResult({ success: true, message: t("submit.success") });
        setFormData({ name: "", company: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setSubmitResult({ success: false, message: t("submit.fail") });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t("title")}
          </motion.h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </div>
      <main className="w-full max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-6">{t("form.title")}</h2>
            <p className="text-gray-600 mb-6">{t("form.description")}</p>
            <form onSubmit={handleSubmit}>
              {["name", "company", "email", "phone"].map((field) => (
                <div className="mb-4" key={field}>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor={field}>
                    {t(`form.${field}`)}
                  </label>
                  <input
                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                    id={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t(`form.${field}_placeholder`)}
                    required
                  />
                </div>
              ))}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  {t("form.message")}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t("form.message_placeholder")}
                  required
                ></textarea>
              </div>
              {submitResult.message && (
                <div className={`mb-4 p-3 rounded-md ${submitResult.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {submitResult.message}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? "bg-blue-400" : "bg-blue-700 hover:bg-blue-800"} text-white py-3 px-4 rounded-md flex items-center justify-center`}
              >
                {isSubmitting ? t("form.sending") : t("form.submit")}
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">{t("info.title")}</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start"><MapPin className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />{t("info.address")}</li>
                <li className="flex items-start"><Phone className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />{t("info.phone")}</li>
                <li className="flex items-start"><Mail className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />qai.joetsou@qai-lab.com</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">{t("hours.title")}</h3>
              <ul className="text-gray-700">
                <li>{t("hours.weekday")}: 9:00 - 18:00</li>
                <li>{t("hours.sat")}: 9:00 - 12:00</li>
                <li>{t("hours.sun")}: {t("hours.closed")}</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">{t("map.title")}</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.7243150436414!2d121.53697781500292!3d24.97645298401251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8ff4c63fbad%3A0xb6b4bdb6b8f6ed0b!2z5qiT5aOr6IGv5YyX5Y2A6I-v5Y-w6LevNTM46Jmf!5e0!3m2!1szh-TW!2stw!4v1681014874636!5m2!1szh-TW!2stw"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                className="rounded-md border"
              ></iframe>
            </div>
          </motion.div>
        </div>
		{/* 常見問題區塊 */}
		<motion.div
		  initial={{ opacity: 0, y: 30 }}
		  animate={{ opacity: 1, y: 0 }}
		  transition={{ duration: 0.6, delay: 0.6 }}
		  className="mt-16 max-w-screen-xl mx-auto px-4"
		>
		  <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">{t("faq.title", "常見問題")}</h2>
		  <div className="space-y-4">
			{[1, 2, 3, 4].map((idx) => (
			  <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
				<h3 className="text-lg font-semibold text-blue-800 mb-2">{t(`faq.q${idx}`)}</h3>
				<p className="text-gray-600">{t(`faq.a${idx}`)}</p>
			  </div>
			))}
		  </div>
		</motion.div>
      </main>
    </div>
  );
};

export default Contact;
