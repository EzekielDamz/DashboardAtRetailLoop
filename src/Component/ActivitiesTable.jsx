// import Progress1 from "../assets/Icons/Progress1";
import progress1 from "../assets/Icons/Progess1.svg"

const ActivitiesTable = () => {
  const Activieties = [
    {
      name: "Jakob",
      status: "Complete",
      active: "7 days ago",
      numberOfModules: 8,
      Progress: progress1,
      ModulesPercentage: "80%",
    },
    {
      name: "Adison Passaquindici Arcand",
      status: "Complete",
      active: "7 days ago",
      numberOfModules: 5,
      Progress: "icon",
      ModulesPercentage: "64%",
    },
    {
      name: "Ruben Franci",
      status: "Complete",
      active: "7 days ago",
      numberOfModules: 10,
      Progress: "icon",
      ModulesPercentage: "100%",
    },
    {
      name: "Ruben WesterVelt",
      status: "Complete",
      active: "7 days ago",
      numberOfModules: 7,
      Progress: "icon",
      ModulesPercentage: "76%",
    },
    {
      name: "Alena Mango",
      status: "Complete",
      active: "7 days ago",
      numberOfModules: 4,
      Progress: "icon",
      ModulesPercentage: "43%",
    },
    {
      name: "Brandon Ekstrom Bothman",
      status: "Complete",
      active: "7 days ago",
      numberOfModules: 9,
      Progress: "icon",
      ModulesPercentage: "89%",
    },
    {
      name: "Adison Passaquindici Arcand",
      status: "Complete",
      active: "7 days ago",
      numberOfModules: 5,
      Progress: "icon",
      ModulesPercentage: "64%",
    },
    {
      name: "Jakob",
      status: "Complete",
      active: "7 days ago",
      numberOfModules: 8,
      Progress: "icon",
      ModulesPercentage: "80%",
    },
  ];
  return (
    <div className="pb-5">
      {Activieties.map((details, index) => (
        <div key={index} className="p-4 flex justify-between">
          <h3>{details.name}</h3>
          <div className="flex gap-10 w-[27rem]">
            <h3 className="">{details.status}</h3>
            <h3>{details.numberOfModules}</h3>
            <h3>{details.active}</h3>
            <h3>{details.numberOfModules}</h3>
            <img src={details.Progress} alt="" />
            <h3>{ details.ModulesPercentage}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivitiesTable;
