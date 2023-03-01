import { Box, Text, Scene, MarkerCamera } from "react-aframe-ar";

export default function App() {
  return (
    <div className="App">
      <h2> React AR JS </h2>
      <div>
        <a-scene>
          {/* <a-marker preset="hiro"> */}
          <a-box
            position="0 1.5 -3"
            color="#ff0000"
            material="opacity:0.5"
            scale="0.5 0.5 0.5"
            animation="property:rotation; from:0 0 0; to:0 360 0; dur:2000; loop:true; dir: alternate;"
          ></a-box>
          {/* </a-marker> */}
          <a-marker preset="hiro">
            <a-box
              color="#0000FF"
              material="opacity:0.5"
              // scale="0.5 0.5 0.5"
              animation={{
                property: "rotation",
                from: "0 0 0",
                to: "0 360 0",
                dur: 2000,
                loop: true,
                dir: "alternate"
              }}
              // animation="property:rotation; from:0 0 0; to:0 360 0; dur:2000; loop:true; dir: alternate;"
            ></a-box>
          </a-marker>
          <a-entity camera>
            <a-cursor></a-cursor>
          </a-entity>
        </a-scene>
      </div>
    </div>
  );
}
