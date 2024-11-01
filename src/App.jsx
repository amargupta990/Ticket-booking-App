import React, { useState } from "react";
import Button from "./components/button/Button";

const App = () => {
  const [seat, setSeat] = useState(0);
  const [economyButtonColors, setEconomyButtonColors] = useState(Array(20).fill('green'));
  const [vipButtonColors, setVipButtonColors] = useState(Array(20).fill('green'));

  const onClickHandler = (index, type) => {
    if (seat >= 5) {
      alert("You have booked 5 seats!!");
    } else {
      let newColors;

      // Toggle button color based on type (economy or VIP)
      if (type === "economy") {
        newColors = [...economyButtonColors];
        newColors[index] = newColors[index] === 'green' ? 'red' : 'green';
        setEconomyButtonColors(newColors);

        // Update seat count
        if (newColors[index] === 'red') {
          setSeat(seat + 1);
        } else {
          setSeat(seat - 1);
        }
      } else if (type === "vip") {
        newColors = [...vipButtonColors];
        newColors[index] = newColors[index] === 'green' ? 'red' : 'green';
        setVipButtonColors(newColors);

        // Update seat count
        if (newColors[index] === 'red') {
          setSeat(seat + 1);
        } else {
          setSeat(seat - 1);
        }
      }
    }
  };

  return (
    <div className="bg-sky-950 h-screen p-2">
      <h1 className="bg-green-600 text-[1.2rem] font-serif font-bold rounded-xl w-[1000px] text-center p-3 border-2 border-orange-800">
        TICKET BOOKING APP
      </h1>
      <div className="flex gap-10 mt-10">
        <h1 className="font-[600] text-[1.2rem] bg-lime-900 h-12 w-[110px] text-white rounded-md ml-2 p-2">
          ECONOMY
        </h1>
        <div className="flex w-[265px] flex-wrap">
          {Array(20).fill(null).map((_, index) => (
            <Button
              key={index}
              onClickHandler={() => onClickHandler(index, "economy")}
              style={{
                color: "black",
                fontSize: "20px",
                marginBottom: "10px",
                fontWeight: 700,
                backgroundColor: economyButtonColors[index] // Use economy colors
              }}
              value={` ${index + 1}`} // Dynamic value for each button
            />
          ))}
        </div>
        <h1 className="font-[600] text-[1.2rem] bg-lime-900 h-12 w-[110px] text-center text-white rounded-md ml-2 p-2">
          VIP
        </h1>
        <div className="flex w-[265px] flex-wrap">
          {Array(20).fill(null).map((_, index) => (
            <Button
              key={index}
              onClickHandler={() => onClickHandler(index, "vip")}
              style={{
                color: "black",
                fontSize: "20px",
                marginBottom: "10px",
                fontWeight: 700,
                backgroundColor: vipButtonColors[index] // Use VIP colors
              }}
              value={` ${index + 1}`} // Dynamic value for each button
            />
          ))}
        </div>
      </div>

      <div className="w-[1000px] mt-5">
        <div className="flex justify-center">
          <div className="bg-red-600 w-[200px] font-[700] p-3 text-center text-white">
            SEAT BOOKED: {seat}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
