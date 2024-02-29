import { useState } from "react";
import { initialElements } from "./data";
import ReactFlow, { Controls } from "react-flow-renderer";

const FlowchartComponent = () => {
  document.title = "Flowchart";

  const nodes = [
    {
      id: "1",
      type: "input",
      sourcePosition: "right",
      data: { label: "Input Node" },
      position: { x: 100, y: 100 },
    },
    {
      id: "2",
      type: "default",
      data: { label: "Second Node" },
      position: { x: 500, y: 100 },
      sourcePosition: "bottom",
      targetPosition: "left",
    },
    {
      id: "3",
      type: "default",
      data: { label: "Third Node" },
      position: { x: 500, y: 400 },
      sourcePosition: "left",
      targetPosition: "top",
    },
    {
      id: "4",
      type: "output",
      data: { label: "Fourth Node" },
      position: { x: 100, y: 400 },
      targetPosition: "right",
    },
  ];

  const edges = [
    { id: "e1", source: "1", target: "2", animated: false, type: "smoothstep" },
    { id: "e2", source: "2", target: "3", animated: true, type: "smoothstep" },
    { id: "e3", source: "3", target: "4", animated: true, type: "smoothstep" },
  ];

  const [elements, setElements] = useState({
    nodes,
    edges,
  });

  const onNodeDragStart = (event, node) => {
    console.log(`Node ${node.id} is on position `, node.position);
    setElements({
      ...elements,
      nodes: elements.nodes.map((item) => {
        if (item.id === node.id) {
          return {
            ...item,
            position: node.position,
          };
        } else {
          return item;
        }
      }),
    });
  };

  const onNodeDragStop = (event, node) => {
    console.log(`Node ${node.id} was dragged to position `, node.position);
    setElements({
      ...elements,
      nodes: elements.nodes.map((item) => {
        if (item.id === node.id) {
          return {
            ...item,
            position: node.position,
          };
        } else {
          return item;
        }
      }),
    });
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ReactFlow
        nodes={elements.nodes}
        edges={elements.edges}
        zoomOnScroll={false}
        onNodeDrag={onNodeDragStart}
        onNodeDragStop={onNodeDragStop}
        fitView
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowchartComponent;
