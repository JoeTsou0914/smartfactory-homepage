import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Download, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const productData: Record<string, {
  title: { zh: string; en: string; ja: string };
  description: { zh: string; en: string; ja: string };
  image: string;
  features: { zh: string[]; en: string[]; ja: string[] };
  applications: { zh: string; en: string; ja: string };
  benefits: { zh: string[]; en: string[]; ja: string[] };
  specs: {
    zh: { name: string; value: string }[];
    en: { name: string; value: string }[];
    ja: { name: string; value: string }[];
  };
  video?: string;
  file?: string;
}> = {
  qai: {
    title: {
      zh: "QAI 智能品質監測系統",
      en: "QAI Smart Quality Monitoring System",
      ja: "QAIスマート品質監視システム"
    },
    description: {
      zh: "即時監控紗線張力，避免斷線與品質不穩，適用假撚加工與高速加彈。透過智能演算法分析生產數據，提前預警潛在問題，讓品質管理更加高效。",
      en: "Real-time tension monitoring for DTY and high-speed operations.",
      ja: "DTYや高速加撚工程向けのリアルタイム張力監視システム。断糸や品質の不安定さを防止し、AIで生産データを解析して予兆検知を行います。"
    },
    image: "/images/demo/320x210.png",
    features: {
      zh: ["張力圖像曲線視覺化", "斷線即時通知", "張力穩定度分析報表", "AI預測性維護", "多機台集中監控"],
      en: ["Tension graph visualization", "Real-time break alert", "Tension stability reporting"],
      ja: ["張力グラフ可視化", "断糸リアルタイム通知", "張力安定度分析レポート", "AIによる予測保全", "複数機の集中監視"]
    },
    benefits: {
      zh: ["減少30%斷線率", "提高20%生產效率", "降低15%不良品率", "節省人力成本"],
      en: ["Reduce breakage by 30%", "Improve efficiency by 20%", "Reduce defects by 15%"],
      ja: ["断糸率を30%削減", "生産効率を20%向上", "不良率を15%削減", "人件費を削減"]
    },
    specs: {
      zh: [
        { name: "監測範圍", value: "0.5-500cN" },
        { name: "精度", value: "±1%" },
        { name: "取樣頻率", value: "1000Hz" },
        { name: "支援接口", value: "RS485/Ethernet" }
      ],
      en: [
        { name: "Range", value: "0.5-500cN" },
        { name: "Accuracy", value: "±1%" },
        { name: "Sampling Rate", value: "1000Hz" },
        { name: "Interfaces", value: "RS485/Ethernet" }
      ],
      ja: [
        { name: "監視範囲", value: "0.5-500cN" },
        { name: "精度", value: "±1%" },
        { name: "サンプリング周波数", value: "1000Hz" },
        { name: "対応インターフェース", value: "RS485/Ethernet" }
      ]
    },
    applications: {
      zh: "假撚機、加彈機張力管理，適用於各類紡織生產線。",
      en: "Tension monitoring in DTY machines.",
      ja: "DTY加撚機などの張力管理。各種テキスタイル生産ラインに対応。"
    },
    video: "https://youtube.com/embed/AACqdEpzoUk",
    file: "/files/qai.pdf"
  },
    fuzz: {
    title: {
      zh: "毛羽檢測系統",
      en: "Fuzz Detection System",
      ja: "フワ検出システム"
    },
    description: {
      zh: "高靈敏毛羽感測器，即時辨識毛羽累積情形，輔助品質控管。採用高解析度光學系統，精確捕捉微細毛羽變化。",
      en: "Real-time detection of fuzz for quality assurance.",
      ja: "高感度のフワ検出センサーで、フワの蓄積をリアルタイムに検知。高解像度光学技術で微細な変化を正確に捉えます。"
    },
    image: "/images/demo/320x210.png",
    features: {
      zh: ["0.1mm 精度偵測", "毛羽分層統計分析", "AI 演算法動態補償", "多頭即時監控", "異常自動警示"],
      en: ["0.1mm detection", "Multi-layer fuzz analysis", "AI-based calibration"],
      ja: ["0.1mm精度検出", "フワの層別統計分析", "AIによる補正アルゴリズム", "多点同時監視", "異常の自動警告"]
    },
    benefits: {
      zh: ["提高品質檢測準確度", "減少人工檢測時間", "降低客訴率", "提升產品一致性"],
      en: ["Improve inspection accuracy", "Reduce manual inspection", "Lower customer complaints"],
      ja: ["品質検査の精度向上", "手動検査時間の短縮", "クレーム率の低下", "製品の一貫性向上"]
    },
    specs: {
      zh: [
        { name: "解析度", value: "0.1mm" },
        { name: "掃描寬度", value: "600mm" },
        { name: "掃描速度", value: "最高60m/min" },
        { name: "支援介面", value: "觸控螢幕/遠端監控" }
      ],
      en: [
        { name: "Resolution", value: "0.1mm" },
        { name: "Scan Width", value: "600mm" },
        { name: "Scan Speed", value: "Max 60m/min" },
        { name: "Interfaces", value: "Touch/Remote" }
      ],
      ja: [
        { name: "解像度", value: "0.1mm" },
        { name: "スキャン幅", value: "600mm" },
        { name: "スキャン速度", value: "最大60m/分" },
        { name: "対応インターフェース", value: "タッチパネル/遠隔監視" }
      ]
    },
    applications: {
      zh: "包覆紗線、緊密紡、特種纖維品管。",
      en: "Used in yarn covering and compact spinning.",
      ja: "カバリングヤーン、コンパクトスピニング、特殊繊維品質管理に活用。"
    },
    file: "/files/fuzz.pdf"
  },
  heat: {
    title: {
      zh: "加熱系統",
      en: "Heating System",
      ja: "加熱システム"
    },
    description: {
      zh: "穩定控溫的模組化加熱解決方案，適用於紡絲與熱處理工序。採用先進的 PID 控制演算法，確保溫度精確控制。",
      en: "Stable heating modules for spinning and thermal processing.",
      ja: "紡糸および熱処理工程向けの安定した温度制御モジュール。PIDアルゴリズムにより高精度な制御を実現。"
    },
    image: "/images/demo/320x210.png",
    features: {
      zh: ["PID 精密溫控", "安全防護電路設計", "多組區域加熱控制", "節能設計", "遠程監控"],
      en: ["Precise PID control", "Built-in safety system", "Multi-zone heating"],
      ja: ["PID精密温度制御", "安全保護回路設計", "複数エリア加熱制御", "省エネ設計", "遠隔監視対応"]
    },
    benefits: {
      zh: ["溫度波動控制在±0.5°C", "能耗降低20%", "延長設備使用壽命", "提高產品一致性"],
      en: ["Temperature control within ±0.5°C", "20% lower energy consumption", "Extended equipment life"],
      ja: ["±0.5°C以内の温度制御", "消費電力20%削減", "装置寿命の延長", "製品一貫性の向上"]
    },
    specs: {
      zh: [
        { name: "溫控範圍", value: "室溫-350°C" },
        { name: "控制精度", value: "±0.5°C" },
        { name: "升溫速率", value: "20°C/min" },
        { name: "供電要求", value: "380V/50Hz" }
      ],
      en: [
        { name: "Temperature Range", value: "RT-350°C" },
        { name: "Control Precision", value: "±0.5°C" },
        { name: "Heating Rate", value: "20°C/min" },
        { name: "Power Supply", value: "380V/50Hz" }
      ],
      ja: [
        { name: "温度範囲", value: "室温～350°C" },
        { name: "制御精度", value: "±0.5°C" },
        { name: "昇温速度", value: "20°C/分" },
        { name: "電源仕様", value: "380V/50Hz" }
      ]
    },
    applications: {
      zh: "加彈、熱定型、加熱封口等。",
      en: "DTY, heat-setting, sealing.",
      ja: "DTY加工、熱定形、加熱封止などに対応。"
    },
    file: "/files/heat.pdf"
  },

  integration: {
    title: {
      zh: "機台整合",
      en: "Machine Integration",
      ja: "機械統合システム"
    },
    description: {
      zh: "老舊機台加值方案，整合 PLC 與感測器，打造智慧節點。讓現有設備不需大幅更換即可升級為智能生產系統。",
      en: "Retrofitting old machines with PLC/sensors for smart upgrade.",
      ja: "旧式機械をPLCとセンサーで統合し、スマートノードに変換。既存設備を大きく入れ替えずにスマート化を実現。"
    },
    image: "/images/demo/320x210.png",
    features: {
      zh: ["訊號轉換模組化", "設備狀態集中回報", "支援 Modbus, OPC UA", "跨品牌設備整合", "硬體與軟體全方位升級"],
      en: ["Modular signal gateway", "Central status dashboard", "Supports Modbus/OPC"],
      ja: ["信号変換のモジュール化", "設備状態の集中報告", "Modbus・OPC UA対応", "異ブランド統合", "ハード・ソフトの全面アップグレード"]
    },
    benefits: {
      zh: ["節省60%以上設備更新成本", "延長舊設備使用壽命", "實現智能化生產", "縮短技術轉型時間"],
      en: ["Save 60% equipment renewal costs", "Extend legacy system life", "Enable smart manufacturing"],
      ja: ["設備更新コスト60%以上削減", "旧設備の寿命延長", "スマート生産の実現", "技術転換期間の短縮"]
    },
    specs: {
      zh: [
        { name: "支援協議", value: "Modbus/OPC UA/MQTT" },
        { name: "介面類型", value: "RS232/485/以太網" },
        { name: "支援感測器", value: "溫度/壓力/振動/電流" },
        { name: "數據儲存", value: "本地/雲端雙存儲" }
      ],
      en: [
        { name: "Protocols", value: "Modbus/OPC UA/MQTT" },
        { name: "Interfaces", value: "RS232/485/Ethernet" },
        { name: "Sensors Support", value: "Temp/Pressure/Vibration" },
        { name: "Data Storage", value: "Local/Cloud" }
      ],
      ja: [
        { name: "対応プロトコル", value: "Modbus/OPC UA/MQTT" },
        { name: "インターフェース", value: "RS232/485/Ethernet" },
        { name: "対応センサー", value: "温度/圧力/振動/電流" },
        { name: "データ保存", value: "ローカル/クラウド両対応" }
      ]
    },
    applications: {
      zh: "適用所有無控制器舊型設備。",
      en: "For non-intelligent industrial machines.",
      ja: "コントローラ非搭載の旧式産業機械に対応。"
    },
    file: "/files/integration.pdf"
  },
  factory: {
    title: {
      zh: "智慧工廠",
      en: "Smart Factory",
      ja: "スマートファクトリー"
    },
    description: {
      zh: "以雲端為基礎的智慧工廠解決方案，整合 OT 與 IT。實現全廠設備互聯互通，提供完整的生產力管理方案。",
      en: "Cloud-based smart factory platform bridging OT/IT.",
      ja: "クラウドベースのスマートファクトリーソリューションでOTとITを融合し、生産設備全体の連携を実現。"
    },
    image: "/images/demo/320x210.png",
    features: {
      zh: ["數據採集與監控平台", "異常通知推播系統", "歷史資料可視化查詢", "生產排程優化", "預測性維護"],
      en: ["Data acquisition platform", "Alert system", "Historical dashboard"],
      ja: ["データ収集・監視プラットフォーム", "異常通知のプッシュ配信", "履歴データの可視化", "生産スケジュール最適化", "予測保守"]
    },
    benefits: {
      zh: ["提高25%整體設備效率(OEE)", "減少50%非計劃停機時間", "降低15%能源消耗", "提升決策效率"],
      en: ["25% improved OEE", "50% less unplanned downtime", "15% lower energy consumption"],
      ja: ["OEE 25%向上", "突発的な停止時間を50%削減", "エネルギー消費15%削減", "意思決定効率の向上"]
    },
    specs: {
      zh: [
        { name: "支援設備數", value: "無限制" },
        { name: "數據延遲", value: "<100ms" },
        { name: "資料保存", value: "36個月" },
        { name: "用戶權限", value: "多層級管理" }
      ],
      en: [
        { name: "Equipment Support", value: "Unlimited" },
        { name: "Data Latency", value: "<100ms" },
        { name: "Data Retention", value: "36 months" },
        { name: "User Access", value: "Multi-level" }
      ],
      ja: [
        { name: "対応設備数", value: "無制限" },
        { name: "データ遅延", value: "<100ms" },
        { name: "保存期間", value: "36ヶ月" },
        { name: "アクセス権限", value: "多階層管理" }
      ]
    },
    applications: {
      zh: "中大型工廠資訊整合。",
      en: "For mid/large factory digitalization.",
      ja: "中・大規模工場のデジタル化対応に最適。"
    },
    file: "/files/factory.pdf"
  },
  parts: {
    title: {
      zh: "紡織零組配件",
      en: "Textile Spare Parts",
      ja: "繊維機械用交換部品"
    },
    description: {
      zh: "導絲座、陶瓷張力器、導輪等紡織機核心零件。採用高品質材料製造，確保長時間運行的可靠性和穩定性。",
      en: "Spindle bases, ceramic guides, tensioners.",
      ja: "糸ガイド、セラミックテンショナー、ガイドローラーなど、長寿命・高品質の繊維機械用部品。"
    },
    image: "/images/demo/320x210.png",
    features: {
      zh: ["高精密加工", "耐磨陶瓷材質", "客製化規格接受訂製", "快速交貨", "與原廠相容"],
      en: ["Precision machining", "Durable ceramics", "Custom sizes available"],
      ja: ["高精度加工", "耐摩耗セラミック材質", "カスタムサイズ対応", "短納期", "純正品互換"]
    },
    benefits: {
      zh: ["延長使用壽命", "降低摩擦係數", "減少維護頻率", "提高產品質量"],
      en: ["Extended lifespan", "Lower friction", "Reduced maintenance", "Improved product quality"],
      ja: ["寿命延長", "摩擦低減", "メンテナンス頻度低下", "製品品質向上"]
    },
    specs: {
      zh: [
        { name: "材質", value: "氧化鋁/氧化鋯/碳化矽" },
        { name: "表面粗糙度", value: "Ra0.2" },
        { name: "尺寸精度", value: "±0.01mm" },
        { name: "硬度", value: "HRA90以上" }
      ],
      en: [
        { name: "Materials", value: "Al₂O₃/ZrO₂/SiC" },
        { name: "Surface Roughness", value: "Ra0.2" },
        { name: "Dimensional Accuracy", value: "±0.01mm" },
        { name: "Hardness", value: "HRA90+" }
      ],
      ja: [
        { name: "材質", value: "アルミナ/ジルコニア/炭化ケイ素" },
        { name: "表面粗さ", value: "Ra0.2" },
        { name: "寸法精度", value: "±0.01mm" },
        { name: "硬度", value: "HRA90以上" }
      ]
    },
    applications: {
      zh: "假撚、包紗、倍捻等機種備品。",
      en: "Spare parts for DTY, covering, twisting machines.",
      ja: "DTY、カバリング、撚糸機のスペアパーツに最適。"
    },
    file: "/files/parts.pdf"
  }
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language as "zh" | "en";
  const product = productData[id || ""];

  useEffect(() => {
    if (product) {
      document.title = `${product.title[lang]} | 雩華企業`;
      window.scrollTo(0, 0);
    }
  }, [product, lang]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold text-red-500 mb-4">{t("product_not_found")}</h1>
          <p className="text-gray-600 mb-6">抱歉，無法找到您所需的產品資訊</p>
          <Button 
            onClick={() => navigate('/services')}
            className="bg-blue-700 hover:bg-blue-800 text-white"
          >
            返回產品列表
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* 產品標題區 */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-screen-xl mx-auto px-4 py-16">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-200 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> 返回
          </button>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {product.title[lang]}
          </motion.h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            {product.description[lang]}
          </p>
        </div>
      </div>

      {/* 產品內容區 */}
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* 左側：產品圖片/影片 */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg mb-8"
            >
              {product.video ? (
                <div className="aspect-video">
                  <iframe
                    src={product.video}
                    title={product.title[lang]}
                    className="w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img
                  src={product.image}
                  alt={product.title[lang]}
                  className="w-full h-auto"
                />
              )}
            </motion.div>

            {/* 規格區塊 */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">技術規格</h2>
              <div className="overflow-hidden rounded-lg border">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    {product.specs[lang].map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
                          {spec.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 應用領域 */}
            <div className="bg-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">應用領域</h2>
              <p className="text-gray-700">
                {product.applications[lang]}
              </p>
            </div>
          </div>

          {/* 右側：產品特點和效益 */}
          <div>
            {/* 產品特點 */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">產品特點</h2>
              <ul className="space-y-4">
                {product.features[lang].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 主要效益 */}
            <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">主要效益</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.benefits[lang].map((benefit, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500"
                  >
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 下載資料 */}
            {product.file && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">產品資料</h2>
                <p className="text-gray-600 mb-4">
                  下載詳細的產品規格表和使用手冊，了解更多技術細節。
                </p>
                <a
                  href={product.file}
                  download
                  className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md transition-colors"
                >
                  <Download className="h-5 w-5 mr-2" />
                  下載產品資料
                </a>
              </div>
            )}

            {/* 諮詢方案 */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4">需要客製化方案？</h2>
              <p className="mb-6 text-blue-100">
                我們的技術團隊可以根據您的需求提供客製化的解決方案。立即聯繫我們，獲取專業建議。
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-white text-blue-900 hover:bg-blue-50"
                  onClick={() => navigate('/contact')}
                >
                  聯絡我們 <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-blue-800"
                  onClick={() => window.location.href = 'tel:+886222186363'}
                >
                  立即來電
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 相關產品推薦 */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">您可能也會感興趣</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(productData)
              .filter(([key]) => key !== id)
              .slice(0, 3)
              .map(([key, item]) => (
                <motion.div
                  key={key}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <img 
                    src={item.image} 
                    alt={item.title[lang]} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      {item.title[lang]}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.description[lang].split('.')[0]}.
                    </p>
                    <Button 
                      variant="link" 
                      className="text-blue-700 hover:text-blue-900 p-0"
                      onClick={() => {
                        navigate(`/product/${key}`);
                        window.scrollTo(0, 0);
                      }}
                    >
                      了解更多 <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;