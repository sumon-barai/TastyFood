export async function getProduct(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error({ age: "fff" });
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

export async function deleteProduct(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error({ age: "fff" });
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}
