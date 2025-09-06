import CardList from "../components/CardList";

const FarmsList = () => {
  const farms = [
    { name: "Green Valley Farm", location: "Chandigarh", weather: "Sunny, 75°F" },
    { name: "Sunny Orchard", location: "Palampur", weather: "Cloudy, 70°F" },
    { name: "Blueberry Fields", location: "Shimla", weather: "Rainy, 65°F" },
  ];

  return (
    <CardList
      title="List of Farms"
      data={farms}
      fields={["name", "location", "weather"]}
      
    />
  );
};

export default FarmsList;
