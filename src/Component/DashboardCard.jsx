import Move from "../assets/Icons/moves.svg";
import Progress from "../assets/Icons/Statusprogress.svg";

const DashboardCard = () => {
  const CardDetails = [
    {
      title: "Uploads",
      amount: "1,345",
      smallIcon: Move,
      bigIcon: Progress,
      dataStarted: "1 Sep",
      dataEnds: "31 Sep",
    },
    {
      title: "Assessments completed",
      amount: "893",
      smallIcon: Move,
      bigIcon: Progress,
      dataStarted: "1 Sep",
      dataEnds: "31 Sep",
    },
    {
      title: "Modules completed",
      amount: "533",
      smallIcon: Move,
      bigIcon: Progress,
      dataStarted: "1 Sep",
      dataEnds: "31 Sep",
    },
  ];
  return (
    <div className="w-full font-Ubuntu">
      <div className="flex lg:gap-[2.3rem] sm:pr-3 sm:gap-4 max-sm:gap-4 pt-[3.4rem] max-sm:overflow-x-auto scrollbar-hide max-sm:whitespace-nowrap">
        {CardDetails.map((cards, index) => (
          <div
            key={index}
            className="bg-white lg:w-[20rem] h-[10rem] sm:p-2 rounded-md max-sm:mb-3 max-sm:shadow-lg lg:shadow-md max-sm:p-3 lg:p-4"
          >
            <div className="flex justify-between max-sm:w-[18rem]">
              <div>
                <p className="text-[#3c3737] lg:text-lg sm:text-md max-sm:text-[1rem]  font-medium">
                  {cards.title}
                </p>

                <div className="flex gap-2">
                  <p className="text-[#3c3737] lg:text-[1.5rem]  sm:text-[1.3rem] max-sm:text-[1.2rem] font-semibold">
                    {cards.amount}
                  </p>
                  <img
                    src={cards.smallIcon}
                    alt="progress icon"
                    className="pt-2 lg:w-[2rem] sm:w-[1rem] max-sm:w-[1rem]"
                  />
                </div>
              </div>
            </div>
            <img
              src={cards.bigIcon}
              alt="Progress icon"
              width={220}
              className="pt-3 font-[1rem]"
            />
            <div className="flex justify-between mt-2 font-Ubuntu">
              <div>
                <p className="text-[#3c3737] text-sm">{cards.dataStarted}</p>
              </div>
              <div>
                <p className="text-[#3c3737] text-sm">{cards.dataEnds}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCard;
