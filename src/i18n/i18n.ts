// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "zh",
    resources: {
      zh: {
        translation: {
          // 導航
          home: "首頁",
          about: "關於我們",
          about_company: "公司簡介",
          history: "歷史沿革",
          services: "產品服務",
          all_products: "所有產品",
          customers: "客戶案例",
          contact: "聯絡我們",
          
          // 關於雩華
          about_title: "關於雩華",
          company_intro: "公司簡介",
          
          // 產品服務
          products_services: "產品服務",
          qai_system: "張力監測系統",
          fuzz_system: "毛羽檢測系統",
          heating_system: "加熱系統",
          machine_integration: "機台整合",
          smart_factory: "智慧工廠",
          textile_parts: "紡織零組配件",
          
          // 產品詳情頁
          product_not_found: "產品不存在",
          product_details: "技術規格",
          applications: "應用領域",
          features: "產品特點",
          benefits: "主要效益",
          product_data: "產品資料",
          back: "返回",
          download_pdf: "下載產品資料",
          custom_solution: "需要客製化方案？",
          contact_us: "聯絡我們",
          call_now: "立即來電",
          you_may_like: "您可能也會感興趣",
          learn_more: "了解更多",
          
          // 首頁
          solution_intro: "了解解決方案",
          transformation_points: "假撚廠轉型要點",
          hover_to_see: "滑鼠移過來查看解決方案",
          solving_problems: "解決問題：",
          our_services: "我們的服務",
          smart_manufacturing: "提供全方位的智慧製造解決方案，從設備監控到數據分析，幫助您實現工業4.0",
          product_solutions: "產品解決方案",
          product_intro: "根據不同需求，我們提供客製化的解決方案，幫助企業提升生產效率和產品品質",
          view_all_products: "查看所有產品",
          sensor_trial: "感測器試用方案",
          trial_intro: "提供企業14天免費試用，讓您體驗智慧製造的優勢，無需立即投入大量成本。",
          contact_us_now: "立即聯絡我們",
          partners: "合作夥伴",
          partners_intro: "信任我們的企業夥伴，攜手共創智慧製造的未來",
          need_solution: "需要智慧工廠整合方案？",
          solution_desc: "無論您是想升級現有設備，還是建立全新的智慧工廠系統，我們都能為您提供專業的解決方案。立即聯繫我們，獲取免費諮詢！",
          free_consultation: "免費諮詢",
          
          // 聯絡頁面
          send_message: "發送訊息",
          contact_intro: "填寫以下表單，我們的專業顧問將與您聯繫，了解您的需求並提供客製化的解決方案",
          name: "姓名",
          company_name: "公司名稱",
          email: "電子郵件",
          phone: "電話",
          message: "訊息內容",
          sending: "發送中...",
          send_msg: "發送訊息",
          contact_info: "聯絡資訊",
          address: "地址",
          business_hours: "營業時間",
          weekdays: "週一至週五",
          saturday: "週六",
          sunday: "休息",
          need_urgent: "需要緊急協助？",
          urgent_desc: "我們提供專業的技術支援服務，如您遇到任何系統問題，請立即聯繫我們",
          call_immediately: "立即撥打",
          location: "我們的位置",
          faq: "常見問題",
          
          // 底部
          company_footer: "雩華企業",
          footer_desc: "專注於紡織智慧製造領域的領導品牌，提供完整的解決方案，幫助企業轉型升級。",
          follow_us: "追蹤我們",
          rights_reserved: "版權所有",
          
          // 語言
          language: "語言",
          chinese: "繁體中文",
          english: "English",
          japanese: "日本語",
        },
      },
      en: {
        translation: {
          // Navigation
          home: "Home",
          about: "About",
          about_company: "Company Profile",
          history: "History",
          services: "Products & Services",
          all_products: "All Products",
          customers: "Customers",
          contact: "Contact",
          
          // About
          about_title: "About Yuhwa",
          company_intro: "Company Introduction",
          
          // Products & Services
          products_services: "Products & Services",
          qai_system: "QAI Monitoring System",
          fuzz_system: "Fuzz Detection System",
          heating_system: "Heating System",
          machine_integration: "Machine Integration",
          smart_factory: "Smart Factory",
          textile_parts: "Textile Parts",
          
          // Product Details
          product_not_found: "Product Not Found",
          product_details: "Technical Specifications",
          applications: "Applications",
          features: "Features",
          benefits: "Benefits",
          product_data: "Product Data",
          back: "Back",
          download_pdf: "Download Product Information",
          custom_solution: "Need a Customized Solution?",
          contact_us: "Contact Us",
          call_now: "Call Now",
          you_may_like: "You May Also Like",
          learn_more: "Learn More",
          
          // Homepage
          solution_intro: "Explore Solutions",
          transformation_points: "DTY Factory Transformation Key Points",
          hover_to_see: "Hover to see solutions",
          solving_problems: "Solving Problems:",
          our_services: "Our Services",
          smart_manufacturing: "Providing comprehensive smart manufacturing solutions, from equipment monitoring to data analysis, helping you achieve Industry 4.0",
          product_solutions: "Product Solutions",
          product_intro: "Based on different requirements, we provide customized solutions to help enterprises improve production efficiency and product quality",
          view_all_products: "View All Products",
          sensor_trial: "Sensor Trial Program",
          trial_intro: "Offering a 14-day free trial for enterprises to experience the advantages of smart manufacturing without initial large investments.",
          contact_us_now: "Contact Us Now",
          partners: "Partners",
          partners_intro: "Our trusted business partners, working together to create the future of smart manufacturing",
          need_solution: "Need a Smart Factory Integration Solution?",
          solution_desc: "Whether you want to upgrade existing equipment or build a new smart factory system, we can provide professional solutions. Contact us now for a free consultation!",
          free_consultation: "Free Consultation",
          
          // Contact Page
          send_message: "Send Message",
          contact_intro: "Fill out the form below and our professional consultants will contact you to understand your needs and provide customized solutions",
          name: "Name",
          company_name: "Company Name",
          email: "Email",
          phone: "Phone",
          message: "Message",
          sending: "Sending...",
          send_msg: "Send Message",
          contact_info: "Contact Information",
          address: "Address",
          business_hours: "Business Hours",
          weekdays: "Monday to Friday",
          saturday: "Saturday",
          sunday: "Closed",
          need_urgent: "Need Urgent Assistance?",
          urgent_desc: "We provide professional technical support services. If you encounter any system issues, please contact us immediately",
          call_immediately: "Call Now",
          location: "Our Location",
          faq: "FAQ",
          
          // Footer
          company_footer: "Yuhwa Enterprise",
          footer_desc: "A leading brand focused on textile smart manufacturing, providing complete solutions to help enterprises transform and upgrade.",
          follow_us: "Follow Us",
          rights_reserved: "All rights reserved",
          
          // Language
          language: "Language",
          chinese: "Traditional Chinese",
          english: "English",
          japanese: "Japanese",
        },
      },
      ja: {
        translation: {
          // ナビゲーション
          home: "ホーム",
          about: "会社概要",
          about_company: "企業プロフィール",
          history: "沿革",
          services: "製品・サービス",
          all_products: "全製品",
          customers: "お客様事例",
          contact: "お問い合わせ",
          
          // 雩華について
          about_title: "雩華について",
          company_intro: "会社紹介",
          
          // 製品・サービス
          products_services: "製品・サービス",
          qai_system: "張力監視システム",
          fuzz_system: "毛羽検出システム",
          heating_system: "加熱システム",
          machine_integration: "機械統合",
          smart_factory: "スマートファクトリー",
          textile_parts: "繊維部品",
          
          // 製品詳細ページ
          product_not_found: "製品が見つかりません",
          product_details: "技術仕様",
          applications: "適用分野",
          features: "製品特徴",
          benefits: "主なメリット",
          product_data: "製品データ",
          back: "戻る",
          download_pdf: "製品資料ダウンロード",
          custom_solution: "カスタマイズソリューションが必要ですか？",
          contact_us: "お問い合わせ",
          call_now: "今すぐお電話",
          you_may_like: "こちらもおすすめ",
          learn_more: "詳細を見る",
          
          // ホームページ
          solution_intro: "ソリューションを探る",
          transformation_points: "DTY工場変革のポイント",
          hover_to_see: "ソリューションを見るにはホバー",
          solving_problems: "問題解決：",
          our_services: "サービス内容",
          smart_manufacturing: "設備監視からデータ分析まで、包括的なスマート製造ソリューションを提供し、インダストリー4.0の実現をサポートします",
          product_solutions: "製品ソリューション",
          product_intro: "異なる要件に基づき、生産効率と製品品質を向上させるためのカスタマイズソリューションを提供します",
          view_all_products: "全ての製品を見る",
          sensor_trial: "センサー試用プログラム",
          trial_intro: "初期投資なしでスマート製造の利点を体験できる、企業向け14日間無料トライアルを提供しています。",
          contact_us_now: "今すぐお問い合わせ",
          partners: "パートナー",
          partners_intro: "私たちの信頼できるビジネスパートナー、スマート製造の未来を共に創造します",
          need_solution: "スマートファクトリー統合ソリューションが必要ですか？",
          solution_desc: "既存の設備をアップグレードするか、新しいスマートファクトリーシステムを構築するかにかかわらず、専門的なソリューションを提供します。無料相談のために今すぐお問い合わせください！",
          free_consultation: "無料相談",
          
          // お問い合わせページ
          send_message: "メッセージを送信",
          contact_intro: "以下のフォームに記入していただければ、専門コンサルタントがご連絡し、ニーズを理解してカスタマイズソリューションを提供します",
          name: "お名前",
          company_name: "会社名",
          email: "メールアドレス",
          phone: "電話番号",
          message: "メッセージ",
          sending: "送信中...",
          send_msg: "メッセージを送信",
          contact_info: "連絡先情報",
          address: "住所",
          business_hours: "営業時間",
          weekdays: "月曜〜金曜",
          saturday: "土曜日",
          sunday: "休業",
          need_urgent: "緊急サポートが必要ですか？",
          urgent_desc: "専門的な技術サポートサービスを提供しています。システムの問題が発生した場合は、すぐにご連絡ください",
          call_immediately: "今すぐ電話",
          location: "所在地",
          faq: "よくある質問",
          
          // フッター
          company_footer: "雩華企業",
          footer_desc: "繊維スマート製造分野に特化したリーディングブランドとして、企業の変革と向上を支援する完全なソリューションを提供しています。",
          follow_us: "フォローする",
          rights_reserved: "無断複写・転載を禁じます",
          
          // 言語
          language: "言語",
          chinese: "繁體中文",
          english: "English",
          japanese: "日本語",
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;