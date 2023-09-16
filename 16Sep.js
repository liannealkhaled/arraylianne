async function shop() {
  const name = await takeinput(`enter name `);
  console.log(`WELCOME ${name}`);

  const answer = await takeinput(`do you want coffee ?`);
  if (answer == `yes`) {
    console.log(`GO TO THE RIGHT`);
  } else if (answer == `no`) {
    console.log(`GO TO THE LEFT`);
  } else {
    console.log(`please answer with yes or no`);
  }
}

console.log(shop);

// array = [1, 2, 3];
// array.push(4);
// console.log(array);
