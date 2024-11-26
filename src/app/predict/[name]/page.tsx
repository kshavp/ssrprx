const getPredictedAge = async (name:string) => {
  const res = await fetch("https://api.agify.io/?name=" + name);
  return res.json();
};
const getPredictedGender = async (name:string) => {
  const res = await fetch("https://api.genderize.io/?name=" + name);
  return res.json();
};
const getPredictedCountry = async (name:string) => {
  const res = await fetch("https://api.nationalize.io/?name=" + name);
  return res.json();
};

interface IParams {
  params: { name: string };
}

export default async function Page({ params }: IParams) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const nationalityData = getPredictedCountry(params.name);

  const [age, gender, nationality] = await Promise.all([ageData,genderData,nationalityData]);

  return (
    <div className="bg-white p-2 rounded-xl w-fit text-black">
      <div>AGE: {age?.age}</div>
      <div>GENDER: {gender?.gender}</div>
      <div>COUNTRY: {nationality?.country[0]?.country_id}</div>
    </div>
  );
}
