class Fetch {
  async getCurrent(input) {

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=metric&lang=en&appid=ddba9442e8c5cc320aad553a048f86b2`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
