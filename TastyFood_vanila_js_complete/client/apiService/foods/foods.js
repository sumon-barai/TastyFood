export async function getFoods(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("data fetching error");
    }
    return await response.json();
  } catch (error) {
    return error.message;
  }
}

export async function deleteFoods(url) {
  try {
  } catch (error) {}
}

// export async function getProduct(url) {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error({ age: "fff" });
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//     return error.message;
//   }
// }
