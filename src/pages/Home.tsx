import TutCard from "@/components/dashboard/tut-card"


const Home = () => {
  return (
    <div className="ml-20 mt-8">
    <h1 className="text-3xl font-semibold">DashBoard</h1>
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 mt-5">
    <TutCard />
    <TutCard />
    <TutCard />
    </div>
    </div>
  )
}

export default Home