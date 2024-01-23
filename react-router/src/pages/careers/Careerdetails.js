import axios from "axios";
import { useLoaderData } from "react-router-dom";

export default function Careerdetails() {
  //   const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h1>Career details for {career.title}</h1>
      <p>starting salary {career.salary}</p>
      <h1>location {career.location}</h1>
      <p>
        Aliquip ut anim ipsum tempor deserunt ad et nisi. Ex culpa ut ipsum
        sunt. Officia incididunt elit ad dolor.
      </p>
    </div>
  );
}
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await axios.get(`http://localhost:4000/careers/${id}`);

  if (res.ok) {
    throw Error("could not found this page!");
  }

  return res.data;
};
