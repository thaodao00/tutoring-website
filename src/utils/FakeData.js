// ReferenceTuition
export const subjects = [
    {id:1,label: "2D"},
    {id:2,label: "3D Max"},
    {id:3,label: "3Ds Max"},
    {id:4,label: "Aerobic"},
    {id:5,label: "Ảo thuật"},
    {id:6,label: "Bơi lội"},
    {id:7,label: "Bóng chuyền"}
];
export const ours = [
    {id: 1, value: 30 * 60, our: '30 Phút'},
    {id: 2, value: 45 * 60, our: '45 Phút'},
    {id: 3, value: 60 * 60, our: '1h'},
    {id: 4, value: 90 * 60, our: '1h 30 Phút'},
    {id: 5, value: 2 * 60 * 60, our: '2h'},
    {id: 6, value: 2.5 * 60 * 60, our: '2.5h'},
    {id: 7, value: 3 * 60 * 60, our: '3h'},

]
export const levels = [
    {id: 1, value: 'STUDENT', level: 'sinh viên'},
    {id: 2, value: 'TEACHER', level: 'giáo viên'},
]
export const follows = [
    {follow: 'Tháng'},
    {follow: 'Buổi'},
    {follow: 'Tuần'},
    {follow: 'Giờ'},
]
//searchTutor
export const genders = [
    {id: 1, value: 'MALE', gender: 'Nam'},
    {id: 2, value: 'FEMALE', gender: 'Nữ'},
    {id: 3, value: 'ALL', gender: 'Cả 2'},

]

// Class
export const data = [
    {
        id: 1,
        title: 'Cần Gia Sư Môn Tiếng Việt Lớp 1 Tại Huyện Bình Xuyên, Tỉnh Vĩnh Phúc',
        idClass: '12323',
        fee: '2,4000,000',
        tax: '25%',
        description: 'bé học để tháng 8 thi lại',
        subjects: [
            {id: 1, name: 'Toán'},
            {id: 2, name: 'Tiếng Anh'},
        ],
        tutorGender: 'nam',
        time: 'Thứ 3 ,thứ 5',
        address: 'tổ dân phố Trại Cúp, thị trấn Bá Hiến, huyện Bình Xuyên, tỉnh Vĩnh Phúc',
        degree: 'Nghề tự do',
    },
    {
        id: 2,
        title: 'Cần Gia Sư Cho Bé 6 Tuổi Bị Tăng Động, Kém Tập Trung Tại Xuyên Mộc, Bà Rịa - Vũng Tàu',
        idClass: '10914  ',
        fee: '2,2000,000',
        tax: '25%',
        description: 'bé học để tháng 8 thi lại',
        subjects: [
            {id: 1, name: 'Toán,'},
            {id: 2, name: 'Tiếng Anh,'},
        ],
        tutorGender: 'nam',
        time: 'Thứ 3 ,thứ 5',
        address: 'tổ dân phố Trại Cúp, thị trấn Bá Hiến, huyện Bình Xuyên, tỉnh Vĩnh Phúc',
        degree: 'Nghề tự do',

    },
    {
        id: 3,
        title: 'Cần Gia Sư Môn Cho Bé 5 Tuổi Chuẩn Bị Vào Lớp 1 Tại Buôn Ma Thuột, Đăk Lăk',
        idClass: '15760  ',
        fee: '1,200,000',
        tax: '25%',
        description: 'bé chuẩn bị vào lớp 1',
        subjects: [
            {id: 1, name: 'Toán'},
            {id: 2, name: 'Tiếng Anh'},
            {id: 3, name: 'Ngữ Văn'}
        ],
        tutorGender: 'nữ',
        time: 'Thứ 3 ,thứ 5',
        address: 'tổ dân phố Trại Cúp, thị trấn Bá Hiến, huyện Bình Xuyên, tỉnh Vĩnh Phúc',
        degree: 'Nghề tự do'
    },
]
export const tagLinks = [
    {
        id: 1, tagName: 'Đàn Guitar'
    },
    {
        id: 2, tagName: 'Đàn Piano'
    },
    {
        id: 3, tagName: 'Trẻ chậm nói'
    },
    {
        id: 4, tagName: 'Yoga'
    },
    {
        id: 5, tagName: 'Đàn Violin'
    },
    {
        id: 6, tagName: 'Tiếng việt lớp 1'
    },
    {
        id: 7, tagName: 'Nhảy hiện đại (dancer)'
    },
    {
        id: 8, tagName: 'Toán lớp 1'
    },
    {
        id: 9, tagName: 'Đàn Organ'
    },
    {
        id: 10, tagName: 'Tiếng trung'
    },
    {
        id: 11, tagName: 'Vẽ'
    },
    {
        id: 12, tagName: 'Lập trình'
    },


]
//RegisterAsTutor
export const address = [
    {label: "Quận 1"},
    {label: "Quận 12"},
    {label: "Thủ Đức"},
    {label: "Tân Bình"},
    {label: "Quận 10"},
    {label: "Gò Vấp"},
    {label: "Quận 1"}
];
export const areas = [
    {label: "Tp.HCM"},
    {label: "Gia Lai"},
    {label: "Lâm Đồng"},
    {label: "Bình Định"},
    {label: "Đắc Nông"},
    {label: "Bình Thuận"},
    {label: "Vùng Tàu"},
    {label: "Khánh Hòa"}
];

export const days = [
    {label: 'Thứ 2'},
    {label: 'Thứ 3'},
    {label: 'Thứ 4'},
    {label: 'Thứ 5'},
    {label: 'Thứ 6'},
    {label: 'Thứ 7'},
    {label: 'Chủ nhật'},
]