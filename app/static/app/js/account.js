
const termsOfUseHTML = `
    <p>Chào mừng quý khách đến mua sắm tại Trunka. Sau khi truy cập vào website Trunka 
    để tham khảo hoặc mua sắm, quý khách đã đồng ý tuân thủ và ràng buộc với những quy định của Trunka. 
    Vui lòng xem kỹ các quy định và hợp tác với chúng tôi để xây dựng 1 website Trunka 
    ngày càng thân thiện và phục vụ tốt những yêu cầu của chính quý khách. Ngoài ra, nếu có 
    bất cứ câu hỏi nào về những thỏa thuận trên đây, vui lòng email cho chúng tôi qua địa chỉ
    <a href="">support@Trunka.com</a>
    </p>
    <h4>Tài khoản của khách hàng</h4>
    <p>Khi sử dụng dịch vụ Trunka, quý khách sẽ cung cấp cho chúng tôi thông tin về địa chỉ email, 
    mật khẩu và họ tên để có được 1 tài khoản tại đây. Việc sử dụng và bảo mật thông tin tài khoản 
    là trách nhiệm và quyền lợi của quý khách khi sử dụng Trunka. Ngoài ra, những thông tin khác 
    trong tài khoản như tên tuổi, địa chỉ.... là những thông tin sẽ giúp Trunka phục vụ quý khách tốt nhất. 
    Trong trường hợp thông tin do quý khách cung cấp không đầy đủ hoặc sai dẫn đến việc không 
    thể giao hàng cho quý khách, chúng tôi có quyền đình chỉ hoặc từ chối phục vụ, giao hàng mà 
    không phải chịu bất cứ trách nhiệm nào đối với quý khách. Khi có những thay đổi thông tin của quý khách, 
    vui lòng cập nhật lại thông tin trong tài khoản trong phần thông tin tài khoản. 
    Quý khách phải giữ kín mật khẩu và tài khoản, hoàn toàn chịu trách nhiệm đối với tất cả 
    các hoạt động diễn ra thông qua việc sử dụng mật khẩu hoặc tài khoản của mình. Quý khách nên 
    đảm bảo thoát khỏi tài khoản tại Trunka sau mỗi lần sử dụng để bảo mật thông tin của mình.
    </p>
    <h4>Quyền lợi bảo mật thông tin của khách hàng</h4>
    <p>Khi sử dụng dịch vụ tại website Trunka, quý khách được đảm bảo rằng những thông tin cung cấp cho 
    chúng tôi sẽ chỉ được dùng để nâng cao chất lượng dịch vụ dành cho khách hàng của Trunka và 
    sẽ không được chuyển giao cho 1 bên thứ ba nào khác vì mục đích thương mại. Thông tin của quý khách 
    tại Trunka sẽ được chúng tôi bảo mật và chỉ trong trường hợp pháp luật yêu cầu, chúng tôi sẽ buộc 
    phải cung cấp những thông tin này cho các cơ quan pháp luật.
    </p>
    <h4>Trách nhiệm của khách hàng khi sử dụng dịch vụ của Trunka</h4>
    <p>Quý khách tuyệt đối không được sử dụng bất kỳ công cụ, phương pháp nào để can thiệp, xâm nhập 
    bất hợp pháp vào hệ thống hay làm thay đổi cấu trúc dữ liệu tại website Trunka. 
    Quý khách không được có những hành động (thực hiện, cổ vũ) việc can thiệp, xâm nhập dữ liệu 
    của Trunka cũng như hệ thống máy chủ của chúng tôi. Ngoài ra, xin vui lòng thông báo cho 
    quản trị web của Trunka ngay khi quý khách phát hiện ra lỗi hệ thống theo số điện thoại 
    <span>0123456789</span> hoặc email <a href="">support@Trunka.com</a>
    </p>
    <p>Quý khách không được đưa ra những nhận xét, đánh giá có ý xúc phạm, quấy rối, làm phiền hoặc 
    có bất cứ hành vi nào thiếu văn hóa đối với người khác. Không nêu ra những nhận xét có tính 
    chính trị (tuyên truyền, chống phá, xuyên tạc chính quyền), kỳ thị tôn giáo, giới tính, sắc tộc....
    Tuyệt đối cấm mọi hành vi mạo nhận, cố ý tạo sự nhầm lẫn mình là một khách hàng khác hoặc 
    là thành viên Ban Quản Trị Trunka.
    </p>
    <h4>Trách nhiệm và quyền lợi của Trunka</h4>
    <p>Trong trường hợp có những phát sinh ngoài ý muốn hoặc trách nhiệm của mình, Trunka sẽ không 
    chịu trách nhiệm về mọi tổn thất phát sinh. Ngoài ra, chúng tôi không cho phép các tổ chức, 
    cá nhân khác quảng bá sản phẩm tại website Trunka mà chưa có sự đồng ý bằng văn bản từ đội ngũ Trunka. 
    Các thỏa thuận và quy định trong Điều khoản sử dụng có thể thay đổi vào bất cứ lúc nào 
    nhưng sẽ được chúng tôi thông báo cụ thể trên website Trunka.
    </p>
`;

document.getElementById('terms-of-use').innerHTML = termsOfUseHTML;
var buttonControls = document.querySelectorAll('.personal .controls .nav__item');
var items = document.querySelectorAll('.personal .details .wrapper');
// Variable for form change avatar
var container = document.querySelector('.personal .container');
var formAvatar = document.querySelector('.personal .form-avatar');
var formAvatarClose = formAvatar.querySelector('.form__close');
var formAvatarSubmit = formAvatar.querySelector('.form__submit-btn');
var formAvatarDemo = formAvatar.querySelector('.form__content-demo img');
var chooseFileAvatar = document.getElementById('file-avatar');
var changeAvatarBtn = document.getElementById('change-avatar');
var personalAvatar = document.getElementById('avatar');

// Change avatar image for account
chooseFileAvatar.addEventListener('change', function (e) {
    formAvatarDemo.src = URL.createObjectURL(e.target.files[0]);
});

changeAvatarBtn.onclick = function () {
    container.style.display = 'block';
    formAvatarDemo.src = personalAvatar.src;
};

formAvatarClose.onclick = function () {
    if (container.style.display == 'block') {
        container.style.display = 'none';
    }
};

// POST request change avatar image
formAvatarSubmit.onclick = function () {
    if (container.style.display == 'block') {
        container.style.display = 'none';
        loaddingElement.style.display = 'block';

        var formData = new FormData();
        var fileAvatar = chooseFileAvatar.files[0];
        formData.append('avatar', fileAvatar);

        fetch('/api/update-avatar/', {
            method: 'POST',
            headers: {
                // Content-Type is generated by the browser
                'X-CSRFToken': csrftoken
            },
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                setTimeout(function () {
                    loaddingElement.style.display = 'none';
                }, 200);

                if (data.success) {
                    setTimeout(function () {
                        location.reload();
                    }, 200);
                } else {
                    alert(data.error);
                }
            })
            .catch(error => {
                loaddingElement.style.display = 'none';
                alert(error);
            });
    }
};

// Add event click to open for forms-group
addEventFormsGroup();

buttonControls.forEach(function (buttonControl, index) {
    buttonControl.addEventListener('click', function () {
        buttonControls.forEach(function (button, i) {
            button.classList.remove('active');
            items[i].classList.remove('active');
        });

        this.classList.add('active');
        items[index].classList.add('active');
        closeAllFormChange(items[index].querySelectorAll('.form__group'), -1);
        addEventFormsGroup();
    });
});

// Open form change personal infomations
function openFormChange(item) {
    var formChange = item.querySelector('.form-change');
    var formGroupBox = item.querySelector('.form__group-box');

    item.querySelector('i').style.transform = 'translateY(-50%) rotate(90deg)';
    formChange.style.display = 'block';
    formChange.style.animation = 'open 0.3s ease forwards';
    formGroupBox.style.marginBottom = formChange.offsetHeight + 'px';
}

// Close form change personal infomations
function closeFormChange(item) {
    var formChange = item.querySelector('.form-change');
    var formGroupBox = item.querySelector('.form__group-box');

    item.querySelector('i').style.transform = 'translateY(-50%)';
    formChange.style.animation = 'close 0.3s ease forwards';
    formGroupBox.style.marginBottom = '0px';
    setTimeout(function () {
        formChange.querySelectorAll('input').forEach(function (item) {
            item.value = '';
        })
        formChange.style.display = 'none';
    }, 300);
}

// Close all form change
function closeAllFormChange(formsGroup, index) {
    formsGroup.forEach(function (item, i) {
        if (i != index) {
            closeFormChange(item);
            item.querySelector('.form-change').style.display = 'none';
        }
    })
}

// Add animation when open/close form-group
function addEventFormsGroup() {
    var formsGroup = document.querySelectorAll('.personal .wrapper.active .form__group');
    var formsGroupBox = document.querySelectorAll('.personal .wrapper.active .form__group-box');

    formsGroup.forEach(function (item, index) {
        formsGroupBox[index].addEventListener('click', function () {
            if (formsGroupBox[index].disabled == true)
                return;

            formsGroupBox[index].disabled = true;
            setTimeout(function () {
                formsGroupBox[index].disabled = false;
            }, 320);

            let isOpen = item.querySelector('.form__group-box').style.marginBottom !== '0px';   // default = false

            if (isOpen) {
                isOpen = false;
                closeFormChange(item);
            } else {
                isOpen = true;
                closeAllFormChange(formsGroup, index);
                openFormChange(item);
            }
        })
    });
}

var userId;
// Get user id when account page is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    if (window.location.pathname === '/account/') {
        fetch('/api/user-id/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
        })
            .then(response => response.json())
            .then(data => {
                userId = data.id;
            })
            .catch(error => {
                alert(error);
            })
    }
});

// Change and update user informations
var formsChange = document.querySelectorAll('.personal .details .form-change');


// Function to change and update user informations: fullname, username, phone number
formsChange.forEach(function (formChange) {
    var inputElement = formChange.querySelector('.form__body-input');
    var buttonChange = formChange.querySelector('.form__body-submit');

    buttonChange.addEventListener('click', function () {
        var data = inputElement.value;

        if (data.trim() !== '') {
            loaddingElement.style.display = 'block';

            fetch('/api/update-account/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
                body: JSON.stringify({
                    [inputElement.name]: data,
                    userId: userId,
                })
            })
                .then(response => response.json())
                .then(data => {
                    setTimeout(function () {
                        loaddingElement.style.display = 'none';
                    }, 200);

                    if (data.success) {
                        setTimeout(function () {
                            location.reload();
                        }, 200);
                    } else {
                        alert(data.error);
                    }
                })
                .catch(error => {
                    loaddingElement.style.display = 'none';
                    alert(error);
                })
        }
    });
})





