import StickyNote from "./components/StickyNote";

export default function App(){

  const dummyNote = {
    _id: "1",
    title: "Meeting Notes",
    tag: "work",
    content: "Discuss the roadmap for Q4 and update deadlines...",
  };
  return(
    <div className="p-8 bg-background min-h-screen text white">
      <StickyNote note = {dummyNote}/>
    </div>
  )
}