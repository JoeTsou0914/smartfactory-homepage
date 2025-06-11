import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <div className="min-h-screen bg-background">
      {/* 頁面標題區 */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-screen-xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t("title")}
          </motion.h1>
          <p className="text-blue-100 text-lg">
            {t("subtitle")}
          </p>
        </div>
      </div>

      <main className="w-full max-w-screen-xl mx-auto px-4 py-12">
        {/* 公司介紹區塊 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">{t("intro.title")}</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">{t("intro.p1")}</p>
            <p className="text-gray-700 mb-4 leading-relaxed">{t("intro.p2")}</p>
            <p className="text-gray-700 leading-relaxed">{t("intro.p3")}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="/images/backgrounds/IMG_5428.jpg"
              alt="YU HWA"
              className="w-full h-auto rounded-xl"
              onError={(e) => {
                e.currentTarget.src = "/images/demo/320x210.png";
              }}
            />
          </motion.div>
        </div>

        {/* 核心價值區塊 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-blue-50 rounded-xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">{t("core.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">{t("core.innovation")}</h3>
              <p className="text-gray-600">{t("core.desc1")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">{t("core.precision")}</h3>
              <p className="text-gray-600">{t("core.desc2")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">{t("core.trust")}</h3>
              <p className="text-gray-600">{t("core.desc3")}</p>
            </div>
          </div>
        </motion.div>

        {/* 專業優勢區塊 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">{t("strength.title")}</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{t("strength.s1.title")}</h3>
              <p className="text-gray-700">{t("strength.s1.desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{t("strength.s2.title")}</h3>
              <p className="text-gray-700">{t("strength.s2.desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{t("strength.s3.title")}</h3>
              <p className="text-gray-700">{t("strength.s3.desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{t("strength.s4.title")}</h3>
              <p className="text-gray-700">{t("strength.s4.desc")}</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default About;
