import { Link } from "react-router-dom";
import { myBooksData } from '../data/MyBooksData';

const MyBooksPage = () => {
  return (
    <>
    <h1>My favouirte Psychological books</h1>
    <div>
      <label htmlFor="search">Search: </label>
      <input autoComplete='off' type="text" id="search" name="search" />
    </div>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {myBooksData.map((book, index) => (
          <tr key={index}>
            <td><Link to={`books/${book.id}`}>{book.id}</Link></td>
            <td>{book.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}


export default MyBooksPage;