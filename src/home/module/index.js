import React from "react";
import Herobanner from "./herobanner";
import Evolution from "./evolution";
import Identity from "./identity";
import Team from "./team";

export default function Home(){
    return(
        <div>
            <div>
                <Herobanner />
                <Evolution />
                <Identity />
                <Team />
            </div>
        </div>
    )
}