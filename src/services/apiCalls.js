import data from "../data/SampleDashboard.json";
//Space for api requests :D

export const getData = async (type, cmd) => {
  const response = [
    ["City", "2010 Population", "2000 Population"],
    ["New York City, NY", 8175000, 8008000],
    ["Los Angeles, CA", 3792000, 3694000],
    ["Chicago, IL", 2695000, 2896000],
    ["Houston, TX", 2099000, 1953000],
    ["Philadelphia, PA", 1526000, 1517000],
  ];
  // let newData = [];

  // respData.forEach((row) => {
  //   let newRow = [];
  //   row.forEach((column) => {
  //     if (parseInt(column)}
  //   });
  //   newData.push(newRow);
  // });

  // for (let i = 0; i < respData.length; i++) {
  //   if (i === 0) newData.push(respData[0])
  //   let newRow = []
  //   for (let j = 0; j < respData[i].length; j++) {

  //   }
  // }

  // console.log(newData);

  return response;
};

export const getDashboards = async () => {
  const response = data;
  return response;
};

export const getDashboard = async (id) => {
  const response = data[id];
  return response;
};
