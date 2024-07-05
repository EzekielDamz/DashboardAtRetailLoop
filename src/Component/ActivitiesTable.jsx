

const ActivitiesTable = ({ Activieties }) => {
  return (
    <div className="pb-5">
      {Activieties.map((details, index) => (
        <div key={index} className={`p-4  flex justify-between ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
          <p className="lg:hidden sm:hidden max-sm:block">
            {typeof details.name === "string"
              ? details.name.substring(0, 5) + "..."
              : details.name}
          </p>
          <p className="lg:block sm:block max-sm:hidden">{details.name}</p>
          <div className="flex justify-between w-[30rem] lg:pl-5 max-sm:pl-10 sm:pl-5 lg:pr-7 max-sm:pr-3">
            <h3 className="">{details.status}</h3>

            <h3 className="pl-[3.5rem] max-sm:hidden sm:block lg:block">
              {details.active}
            </h3>
            <div className="flex gap-2">
              <h3>{details.numberOfModules}</h3>
              <img src={details.Progress} alt="status bar" width={50} />
            </div>

            <h3>{details.ModulesPercentage}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivitiesTable;
