export const initialElements = [
  {
    id: "1",
    type: "default",
    data: { label: "Node 1" },
    position: { x: 100, y: 100 },
  },
  {
    id: "2",
    type: "default",
    data: { label: "Node 2", visible: false },
    position: { x: 300, y: 100 },
  },
  {
    id: "3",
    type: "default",
    data: { label: "Node 3", visible: false },
    position: { x: 500, y: 100 },
  },
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
];
