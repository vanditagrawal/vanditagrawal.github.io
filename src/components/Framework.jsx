import { OrbitingCircles } from "./OrbitingCircles";

export function Framework() {
    const skills = [
        "csharp",
        "cplusplus",
        "github",
        "blender",
        "unity",
        "unreal",
        "substance painter",
        "git",
    ];
    
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center
          justify-center overflow-hidden">
            
            <OrbitingCircles iconSize={40}>
            {skills.map((skill, index) => (
                    <Icon key={index} src={`/logos/${skill}.svg`} />
            ))}
            </OrbitingCircles>
            
            <OrbitingCircles 
              iconSize={25} 
              radius={100} 
              reverse speed={2}
            >
            {skills.reverse().map((skill, index) => (
                <Icon key={index} src={`/logos/${skill}.svg`} />
            ))}
            </OrbitingCircles>
        </div>
    )
}

const Icon = ({ src }) => (
  <img
    src={src}
    alt="Skill icon"
    className="duration-200 transform rounded-sm hover:scale-125 cursor-pointer"
  />
);