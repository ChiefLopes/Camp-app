import React from "react";
import Button from "./Button";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        {/* LEFT SIDE */}
        <div className="z-20 flex flex-1 flex-col items-start justify-center gap-12">
          <h2 className="capitalize bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android, Download now!
          </p>

          <div className="flex w-full">
            <Button
              type="button"
              title="App Store"
              variant="btn_white"
              icon="/apple.svg"
              full
            />
            <Button
              type="button"
              title="Play Store"
              variant="btn_dark_green_outline"
              icon="/android.svg"
              full
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
