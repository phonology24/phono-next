import React, { useState, useEffect } from "react";
import "../../styles/achievements.css";

const Achievements = () => {
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: "Happy Customers",
      description: "Description 1",
      count: 0,
      target: 1000,
    },
    {
      id: 2,
      title: "Experience",
      description: "Description 2",
      count: 0,
      target: 15,
    },
    {
      id: 3,
      title: "Calls Processed",
      description: "Description 3",
      count: 0,
      target: 24,
    },
  ]);

  useEffect(() => {
    const intervals = achievements.map((achievement, index) => {
      return setInterval(() => {
        setAchievements((prevAchievements) => {
          const updatedAchievements = prevAchievements.map(
            (prevAchievement, i) => {
              if (i === index) {
                const newCount =
                  prevAchievement.count + Math.floor(Math.random() * 10 + 1);
                return {
                  ...prevAchievement,
                  count:
                    newCount > achievement.target
                      ? achievement.target
                      : newCount,
                };
              }
              return prevAchievement;
            }
          );
          return updatedAchievements;
        });
      }, 10);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [achievements]);

  return (
    <div className="achievements-container" >
      {achievements.map((achievement) => (
        <div
          key={achievement.id}
          className="card"
          style={{
            border: "none",
            background: "rgba(204, 204, 204, 0.488)",
            fontSize: "24px",
          }}
        >
          <h1 style={{fontSize:"14px"}}>
            {achievement.id === 3 && achievement.count === achievement.target
              ? "24 billion+"
              : achievement.count > achievement.target
              ? `${achievement.target}+`
              : `${achievement.count}+`}
          </h1>
          <h2>{achievement.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
