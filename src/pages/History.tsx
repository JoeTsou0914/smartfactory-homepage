import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const History = () => {
  const { t } = useTranslation("history");

  const timelineEvents = [
    { year: 2017, title: t("timeline.2017.title"), description: t("timeline.2017.desc") },
    { year: 2016, title: t("timeline.2016.title"), description: t("timeline.2016.desc") },
    { year: 2015, title: t("timeline.2015.title"), description: t("timeline.2015.desc") },
    { year: 2014, title: t("timeline.2014.title"), description: t("timeline.2014.desc") },
    { year: 2012, title: t("timeline.2012.title"), description: t("timeline.2012.desc") },
    { year: 2010, title: t("timeline.2010.title"), description: t("timeline.2010.desc") },
    { year: 2005, title: t("timeline.2005.title"), description: t("timeline.2005.desc") },
    { year: 2000, title: t("timeline.2000a.title"), description: t("timeline.2000a.desc") },
    { year: 2000, title: t("timeline.2000b.title"), description: t("timeline.2000b.desc") }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-16 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          {t("title")}
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          {t("description")}
        </p>
      </div>

      <div className="w-full max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose max-w-none">
              <p className="text-lg mb-4">{t("intro.1")}</p>
              <p className="text-lg mb-4">{t("intro.2")}</p>
              <p className="text-lg">{t("intro.3")}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <img 
              src="/images/history/company.jpg" 
              alt="YU HWA" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">{t("milestone")}</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary opacity-50"></div>
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center z-10 shadow-md">
                    {event.year}
                  </div>
                </div>
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gray-100 p-10 rounded-xl shadow-md text-center"
        >
          <h2 className="text-3xl font-bold mb-6">{t("core.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-3">{t("core.innovation")}</h3>
              <p>{t("core.desc1")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-3">{t("core.precision")}</h3>
              <p>{t("core.desc2")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-3">{t("core.trust")}</h3>
              <p>{t("core.desc3")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default History;
