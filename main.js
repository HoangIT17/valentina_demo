 //bài 1: 
  //Viết chương trình nhập vào một chuỗi nếu độ dài của chuỗi ít nhất là 3 - thêm "ing" vào chuỗi đó trường hợp chuỗi kết thúc bằng "ing" - thêm "ly".

  function addIngorLy(str) {
    var bai1 = "Bài 1: ";
    if (str.length >= 3) {
      //-3 là lấy 3 kí tự cuối cùng của chuỗi
      if (str.substr(-3) == "ing") {
        str += "ly";
        console.log(bai1 + str);
      } else {
        str += "ing";
        console.log(bai1 + str);
      }
    } else {
      console.log(bai1 + str);
    }
    }
  
    addIngorLy("go");
    addIngorLy("Play");
    addIngorLy("Fish");
    addIngorLy("w3school");
  
    //bài 2:
    //Viết một hàm nhận một chuỗi làm đầu vào và trả về một chuỗi mới với tất cả các chữ cái viết hoa được viết thường và tất cả các chữ cái viết thường được viết hoa.
  
    function replaceCase(inputString) {
    // Sử dụng replace() với biểu thức chính quy để thay thế chữ cái
    // /[a-zA-Z]/g là biểu thức chính quy để tìm tất cả các chữ cái trong chuỗi
    return inputString.replace(/[a-zA-Z]/g, function(match) {
        // Nếu là chữ cái viết hoa, chuyển thành viết thường và ngược lại
        return match === match.toUpperCase() ? match.toLowerCase() : match.toUpperCase();
    });
    }
  
    var bai2 = "Bài 2: ";
    console.log(bai2 + replaceCase("King of Gamer")); 
    console.log(bai2 + replaceCase("Developer"));
    console.log(bai2 + replaceCase("W3School"));
  
    //bài 3
    //Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với tất cả các phần tử "không phải số" được xóa bỏ.
  
    function filterNumbers(arr) {
    // Sử dụng filter() để giữ lại các phần tử là số
    return arr.filter(function(element) {
        // Kiểm tra xem phần tử có phải là số không
        return !isNaN(element);
    });
    }
  
    var bai3 = "Bài 3: ";
    console.log(bai3 + filterNumbers([1, "a", 2, "b", 3]));
    console.log(bai3 + filterNumbers([1, 2, "aasf", "1", "123", 123]));
    console.log(bai3 + filterNumbers(["jsyt", 4, "yt", 6]));
  
    //bài 4
    //Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với các phần tử được sắp xếp theo thứ tự giảm dần.
  
    function sortDescending(arr) {
    // Sử dụng sort() với hàm so sánh để sắp xếp mảng theo thứ tự giảm dần
    return arr.sort(function(a, b) {
        return b - a;
    });
    }
  
    var bai4 = "Bài 4: ";
  
    console.log(bai4 + sortDescending([1, 3, 2, 5, 4]));
    console.log(bai4 + sortDescending([1, 7, 2, 5, 4]));
    console.log(bai4 + sortDescending([1, 3, 2, 5, 4, 6, 9, 8, 7]));
  
    //bai 5
    //Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với tất cả các phần tử được nhân với 2.
  
    function multiplyByTwo(arr) {
    // Sử dụng map() để áp dụng phép nhân cho từng phần tử
    return arr.map(function(element) {
        return element * 2;
    });
    }
  
    var bai5 = "Bài 5: ";
    console.log(bai5 + multiplyByTwo([1, 2, 3, 4]));
    console.log(bai5 + multiplyByTwo([1, 0, 3, 4]));
    console.log(bai5 + multiplyByTwo([1, 2, 8, 9]));
  
    //bai 6
    //Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới chỉ có số lẻ.
  
    function filterOddNumbers(arr) {
    var newArray = [];
  
    // Sử dụng vòng lặp để kiểm tra từng phần tử trong mảng
    for (var i = 0; i < arr.length; i++) {
        // Kiểm tra xem phần tử có phải là số lẻ không
        if (arr[i] % 2 !== 0) {
            // dùng push nếu là số lẻ, thêm vào mảng kết quả
            newArray.push(arr[i]);
        }
    }
  
    return newArray;
    }
  
    var bai6 = "Bài 6: ";
    console.log(bai6 + filterOddNumbers([1, 2, 7, 8]));
    console.log(bai6 + filterOddNumbers([1, 0, 3, 4]));
    console.log(bai6 + filterOddNumbers([1, 2, 8, 9]));
  
    //bai7
    //Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với tất cả các phần tử lặp lại được loại bỏ.
  
    function removeDuplicates(arr) {
    var newArray = [];
  
    // Sử dụng vòng lặp để kiểm tra từng phần tử trong mảng
    for (var i = 0; i < arr.length; i++) {
        // Kiểm tra xem phần tử đã tồn tại trong mảng kết quả chưa
        if (newArray.indexOf(arr[i]) === -1) {
            // Nếu chưa tồn tại, thêm vào mảng kết quả
            newArray.push(arr[i]);
        }
    }
  
    return newArray;
    }
  
    var bai7 = "Bài 7: ";
    console.log(bai7 + removeDuplicates([1, 2, 7, 8, 1, 2, 3, 4]));
    console.log(bai7 + removeDuplicates([1, 0, 3, 4, 1, 5, 0, 4]));
    console.log(bai7 + removeDuplicates([1, 2, 8, 9, 1, 2, 8, 9]));