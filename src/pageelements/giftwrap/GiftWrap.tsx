import React from 'react';
import '../../css/cartitems.css'


interface GiftWrapProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function GiftWrap({ onChange }: GiftWrapProps) {
  return (
    <div className = "container">
      <label className="">
      <input type="checkbox" onChange={onChange}></input>
      <span className="checkmark"></span>
      </label>
      <p className="textSizeSmall">Gave indpakning: 10kr ekstra</p>
    </div>
  );
}