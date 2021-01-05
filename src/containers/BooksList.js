import React from 'react';

const BooksList = () => (
  <div>
    <p>Table with colgroup</p>
    <table>
      <colgroup span="4" />
      <tbody>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        <tr>
          <td>1</td>
          <td>The little Mermaid</td>
          <td>Children</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default BooksList;
