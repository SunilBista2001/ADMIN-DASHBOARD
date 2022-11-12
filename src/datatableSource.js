export const userColoumn = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Username",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="wrapper">
          <img src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 80 },
];

export const userRows = [
  {
    id: 1,
    username: "Sunil Bista",
    img: "./assets/sunilBista.jpg",
    email: "btwitsbista@gmail.com",
    age: 21,
  },
  {
    id: 2,
    username: "Cristiano Ronaldo",
    img: "./assets/ronaldo.jpg",
    email: "cr7@gmail.com",
    age: 38,
  },
  {
    id: 3,
    username: "Lionel Messi",
    img: "./assets/messi.webp",
    email: "lm10@gmail.com",
    age: 35,
  },
  {
    id: 4,
    username: "Zayn Khan",
    img: "./assets/zayn.webp",
    email: "khanzayn@gmail.com",
    age: 30,
  },
  {
    id: 5,
    username: "Jake Sinier",
    img: "./assets/jake.webp",
    email: "jake2001@gmail.com",
    age: 28,
  },
  {
    id: 6,
    username: "Kylie Jenner",
    img: "./assets/kylie.jpg",
    email: "Jenner1998@gmail.com",
    age: 26,
  },
  {
    id: 7,
    username: "Sake Watson",
    img: "./assets/sake.webp",
    email: "sake2095@gmail.com",
    age: 22,
  },
];
