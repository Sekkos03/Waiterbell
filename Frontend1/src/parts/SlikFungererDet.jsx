import React from "react";
import "../styles/SlikFungererDet.css";

const features = [
  {
    name: "Waiter Call System",
    icon: "🔔",
    description: "Description for Waiter Call System",
  },
  {
    name: "Table Map & Overview",
    icon: "🗺️",
    description: "Description for Table Map & Overview",
  },
  { name: "LED Candle", icon: "🕯️", description: "Description for LED Candle" },
  {
    name: "Reservation Function",
    icon: "🔒",
    description: "Description for Reservation Function",
  },
  {
    name: "Theft Protection",
    icon: "🛡️",
    description: "Description for Theft Protection",
  },
  {
    name: "Tools for Management",
    icon: "🛠️",
    description: "Description for Tools for Management",
  },
  {
    name: "NFC Function",
    icon: "📱",
    isNew: true,
    description: "Description for NFC Function",
  },
  {
    name: "Global API",
    icon: "🌐",
    isNew: true,
    description: "Description for Global API",
  },
  {
    name: "Technical Features",
    icon: "⚙️",
    description: "Description for Technical Features",
  },
];

const FeatureCard = ({ feature, onClick }) => (
  <div className="feature-card" onClick={() => onClick(feature)}>
    <div className="feature-icon">{feature.icon}</div>
    <div className="feature-name">{feature.name}</div>
    {feature.isNew && <div className="feature-new">NEW</div>}
  </div>
);

const FeatureDetail = ({ feature }) => (
  <div className="feature-detail">
    <div className="feature-icon-large">{feature.icon}</div>
    <div className="feature-info">
      <h2>{feature.name}</h2>
      <p>{feature.description}</p>
    </div>
  </div>
);

const SlikFungererDet = () => {
  const [selectedFeature, setSelectedFeature] = React.useState(features[0]);

  return (
    <div className="feature-container">
      <h1>8+ FEATURES IN ONE PRODUCT</h1>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            feature={feature}
            onClick={setSelectedFeature}
          />
        ))}
      </div>
      <div className="feature-page">
        <FeatureDetail feature={selectedFeature} />
      </div>
    </div>
  );
};

export default SlikFungererDet;
