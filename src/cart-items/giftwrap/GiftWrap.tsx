import React from "react";
import "../.././common.css";

interface GiftWrapProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function GiftWrap({ onChange }: GiftWrapProps) {
  return (
    <div className="flexRow">
      <label className="">
        <input type="checkbox" onChange={onChange}></input>
        <span className="checkmark"></span>
      </label>
      <p className="textSizeSmall marginLeft10px">
        Gave indpakning: 10kr ekstra
      </p>
    </div>
  );
}
