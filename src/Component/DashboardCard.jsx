const DashboardCard = () => {
  const CardDetails = [
    {
      title: "Uploads",
      amount: "1,345",
      smallIcon: "fas fa",
      bigIcon: "fas fa-upload",
      dataStarted: "1 Sep",
      dataEnds: "31 Sep",
    },
    {
      title: "Assessments completed",
      amount: "893",
      smallIcon: "fas fa",
      bigIcon: "fas fa-upload",
      dataStarted: "1 Sep",
      dataEnds: "31 Sep",
    },
    {
      title: "Modules completed",
      amount: "533",
      smallIcon: "fas fa",
      bigIcon: "fas fa-upload",
      dataStarted: "1 Sep",
      dataEnds: "31 Sep",
    },
  ];
  return (
    <div >
      <div className="flex gap-[1.7rem] pt-[3.4rem]">
        {CardDetails.map((cards, index) => (
          <div key={index} className="bg-white w-[20rem] h-[10rem] rounded-md shadow-md p-4" >
            <div className="flex justify-between">
              <div>
                <h3 className="text-[#3c3737] text-lg font-medium">{cards.title}</h3>
                <p className="text-[#3c3737] text-[1.5rem] font-semibold">{cards.amount}</p>
              </div>
              <div>
                <i className={`${cards.bigIcon} text-[#3c3737] text-2xl`}></i>
              </div>
            </div>
            <div className="flex justify-between mt-2">
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
  )
}

export default DashboardCard