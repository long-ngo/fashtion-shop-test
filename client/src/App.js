import logo from './logo.svg';
import './App.css';

function App() {
    const products = [
        {
          productName: 'áo thun',
          unitsInStock: 5,
          unitPrice: 20000,
          image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftikibook.com%2Fdia-chi-ban-ao-thun-gia-si-re-nhat-thanh-pho-ho-chi-minh-pr1233.html&psig=AOvVaw0DRzfEpGeZeB9njiFAGa66&ust=1622020288452000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNiP3sy-5PACFQAAAAAdAAAAABAI'
        },
        {
          productName: 'áo khoác',
          unitsInStock: 5,
          unitPrice: 20000,
          image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvoso.vn%2Fao-khoac-du-hai-lop-hades-p105319.html&psig=AOvVaw0HruCcvRW8X9STBOfBgf9m&ust=1622020379590000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjF_P6-5PACFQAAAAAdAAAAABAD'
        }
    ];

    return (
        <div className="App">
            <h1>Reactjs</h1>

            <table>
            {products.map(product => {
                return (
                    <div>
                        <th>
                            <td>Tên sản phẩm</td>
                            <td>Giá</td>
                            <td>Số lượng</td>
                            <td>Hình ảnh</td>
                        </th>
                            <tr>
                            <td>{product.productName}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.unitsInStock}</td>
                            <td>
                                <img src={product.image} alt={product.productName}></img>
                            </td>
                        </tr>
                    </div>
                )
            })}
            </table>
        </div>
    );
}

export default App;
