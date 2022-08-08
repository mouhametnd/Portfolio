import SmallBox from '../Components/Others/SmallBox';
import arraySkills from '../constants/arraySkills';

const filteredByType = query => {
  return arraySkills
    .filter(skill => skill.type === query)
    .map(({ icon, name }) => (
      <SmallBox key={icon + name}>
        <img src={icon} alt={name} loading="lazy" />
        <span> {name}</span>
      </SmallBox>
    ));
};



export default filteredByType;
