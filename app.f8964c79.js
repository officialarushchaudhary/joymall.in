var lastElement = null;
var isapp = !!navigator.userAgent.match(/Html5Plus/i);
var rcode = location.search.substr(1).split("=");
if(rcode.length>0 && rcode[0] == "rcode")
{
    rcode = rcode[1];
}else{
    rcode = "";
}
// window.addEventListener('hashchange', function() {
	
// 	    alert("Hash Changed");
	
// 	},false);
(function(t) {

    function e(e) {
        for (var i, s, r = e[0], l = e[1], c = e[2], _ = 0, u = []; _ < r.length; _++)
            s = r[_],
            Object.prototype.hasOwnProperty.call(n, s) && n[s] && u.push(n[s][0]),
            n[s] = 0;
        for (i in l)
            Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
        d && d(e);
        while (u.length)
            u.shift()();
        return o.push.apply(o, c || []),
        a()
    }
    function a() {
        for (var t, e = 0; e < o.length; e++) {
            for (var a = o[e], i = !0, r = 1; r < a.length; r++) {
                var l = a[r];
                0 !== n[l] && (i = !1)
            }
            i && (o.splice(e--, 1),
            t = s(s.s = a[0]))
        }
        return t
    }
    var i = {}
      , n = {
        app: 0
    }
      , o = [];
    function s(e) {
        if (i[e])
            return i[e].exports;
        var a = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, s),
        a.l = !0,
        a.exports
    }
    s.m = t,
    s.c = i,
    s.d = function(t, e, a) {
        s.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }
    ,
    s.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    s.t = function(t, e) {
        if (1 & e && (t = s(t)),
        8 & e)
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule)
            return t;
        var a = Object.create(null);
        if (s.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                s.d(a, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return a
    }
    ,
    s.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        }
        : function() {
            return t
        }
        ;
        return s.d(e, "a", e),
        e
    }
    ,
    s.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    s.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || []
      , l = r.push.bind(r);
    r.push = e,
    r = r.slice();
    for (var c = 0; c < r.length; c++)
        e(r[c]);
    var d = l;
    o.push([0, "chunk-vendors"]),
    a()
}
)({
    0: function(t, e, a) {
        t.exports = a("56d7")
    },
    "0c1b": function(t, e, a) {},
    1: function(t, e) {},
    "11db": function(t, e, a) {},
    "195f": function(t, e, a) {
        "use strict";
        var i = a("0c1b")
          , n = a.n(i);
        n.a
    },
    "2bee": function(t, e, a) {},
    "33ba": function(t, e) {
        t.exports = {
            shop: {
                welcome: "Chào mừng trở lại",
                quality_guarantee: "Đảm bảo chất lượng",
                coem_shop: "CỬA HÀNG COEM",
                search_for_goods: "Tìm kiếm hàng hóa",
                product: "Sản phẩm",
                buy_now: "Mua ngay",
                buy: "Mua",
                sold_out: "Bán hết",
                product_spec: "Thông số kỹ thuật sản phẩm",
                select_address: "Chọn Địa chỉ",
                add_address: "Thêm địa chỉ",
                enter_pwd: "Nhập mật khẩu đăng nhập của bạn",
                pay_now: "Thanh toán ngay",
                open_with_an_app: "Mở bằng một ứng dụng"
            },
            win: {
                ava_bal: "Số dư khả dụng",
                recharge: "Nạp tiền",
                read_rule: "Đọc quy tắc",
                success: "Thành công",
                fail: "Thất bại",
                wait: "đợi chút",
                parity: "Parity",
                sapre: "Sapre",
                bcone: "Bcone",
                emerd: "Emerd",
                period: "Thời kỳ",
                pre_period: "Thời kỳ trước",
                period_detail: "Chi tiết thời gian",
                contract_money: "Tiền hợp đồng",
                contract_count: "Số lượng hợp đồng",
                delivery: "giao hang",
                fee: "Phí",
                open_price: "Giá mở",
                select: "Chọn",
                status: "Trạng thái",
                amount: "Số tiền",
                create_time: "Tạo thời gian",
                count_down: "Đếm ngược",
                join_green: "màu xanh lá",
                join_violet: "màu tím",
                join_red: "màu đỏ",
                record: "Bản ghi",
                my: "tôi của tôi",
                price: "Giá",
                number: "Số",
                result: "Kết quả",
                total_money_is: "Tổng tiền hợp đồng là",
                green: "màu xanh lá",
                red: "màu đỏ",
                violet: "màu tím",
                prepay: "Trả trước",
                rule_of_guess: "Quy tắc đoán",
                show_period: "Hiển thị thời gian",
                show_open_num: "Hiển thị số mở"
            },
            my: {
                user: "Người dùng",
                ava_bal: "Số dư khả dụng",
                orders: "Đơn hàng",
                all: "tất cả",
                undeliver: "Người không gửi",
                unreceive: "không tin tưởng",
                success: "Thành công",
                fail: "Thất bại",
                back_to_balance: "Quay lại cân bằng",
                wait: "đợi chút",
                official: "Chính thức",
                wallet: "Ví",
                recharge: "Nạp tiền",
                recharge_cancel: "Nạp tiền Hủy",
                change_nick_name: "Thay đổi tên hiệu",
                nick_name: "Biệt danh",
                balance: "Số dư",
                enter_select_recharge_amount: "Đi vào hoặc Chọn số tiền nạp lại",
                payment: "Thanh toán",
                payout: "Xuất chi",
                recharge_record: "Hồ sơ nạp tiền",
                withdrawal: "Rút tiền",
                withdrawal_reject: "Từ chối rút tiền",
                enter_withdrawal_amount: "Nhập số tiền rút",
                fee: "Phí",
                to_account: "vào tài khoản",
                select_bank_card: "Chọn Thẻ ngân hàng",
                add_bank_card: "Thêm thẻ ngân hàng",
                edit_bank_card: "Chỉnh sửa thẻ ngân hàng",
                add_address: "Thêm địa chỉ",
                edit_address: "Chỉnh sửa địa chỉ",
                enter_pwd: "Nhập mật khẩu đăng nhập của bạn",
                transactions: "Giao dịch",
                join_period: "Thời gian tham gia",
                period_win: "Thời gian giành chiến thắng",
                order_cost: "Chi phí đặt hàng",
                withdrawal_fee: "Phí rút tiền",
                profit_from_promotion: "Tiền thưởng từ khuyến mãi",
                bank_card: "Thẻ ngân hàng",
                full_name: "Họ và tên",
                actual_name: "Tên thực tế",
                ifsc_code: "IFSC Code",
                account_number: "Số tài khoản",
				transfer_bankcode: "Transfer Bank Name",
				transfer_account_number: "Transfer Account Number",
				your_bankcode: "Your Bank Name",
				your_account_number: "Your Account Number",
                province: "Tỉnh",
                state_territory: "Tiểu bang",
                city: "Thành phố",
                email: "Email",
                upi: "UPI",
                address: "Địa chỉ",
                pin_code: "Mã pin",
                state: "Nhà nước",
                town_city: "Thị trấn / Thành phố",
                detail_address: "Chi tiết địa chỉ",
                account_security: "Bảo mật tài khoản",
                reset_pwd: "Đặt lại mật khẩu",
                about: "Giới thiệu",
                logout: "Thoát",
                withdrawal_record: "Hồ sơ rút tiền",
                mobile_number: "Số điện thoại di động",
                mobile: "Di động",
                password: "Mật khẩu",
                login: "Đăng nhập",
                mb_required: "Bắt ​​buộc phải có số điện thoại di động",
                pwd_required: "Bắt ​​buộc phải có mật khẩu",
                verify_code_required: "Mã xác minh là bắt buộc",
                r_code_required: "Mã khuyến nghị là bắt buộc",
                email_required: "Email là bắt buộc",
                email_must_valid: "Email phải hợp lệ",
                register: "Đăng ký",
                forget_pwd: "Quên mật khẩu?",
                verify_code: "Mã xác minh",
                r_code: "Mã khuyến nghị",
                new_pwd: "Mật khẩu mới",
                gift_code: "Mã số quà tặng",
                receive_gift: "Nhận quà",
                bank_name: "Tên ngân hàng",
                suggestions: "Khiếu nại & Gợi ý",
                add_suggestion: "Thêm Khiếu nại & Đề xuất",
                promotion: "Khuyến mãi",
                promotion_record: "Hồ sơ khuyến mãi",
                type_suggestion: "Gợi ý",
                type_consult: "Tham khảo ý kiến",
                type_recharge: "Vấn đề nạp tiền",
                type_withdraw: "Vấn đề rút tiền",
                type_parity: "Vấn đề chẵn lẻ",
                type_gift: "Vấn đề nhận quà tặng",
                type_other: "Khác",
                type: "Loại",
                out_id: "Id ngoài",
                out_id_hint: "Số giao dịch gây ra sự cố",
                whats_app: "WhatsApp",
                whats_app_hint: "WhatsApp để liên lạc với bạn",
                description: "Mô tả",
                service_desc: "Dịch vụ: 10: 00 ~ 17: 00, Thứ Hai ~ Thứ Sáu khoảng 1 ~ 5 ngày làm việc",
                reply: "Đáp lại",
                bonus: "Tiền thưởng",
                apply: "Ứng dụng",
                bonus_record: "Bản ghi tiền thưởng",
                apply_record: "Áp dụng hồ sơ",
                level_1: "Cấp 1",
                level_2: "Cấp 2",
                total_people: "Tổng số người",
                contribution: "Đóng góp",
                invite_friends: "Mời bạn bè",
                apply_to_balance: "Áp dụng cho số dư",
                my_promotion_code: "Mã khuyến mãi của tôi",
                my_promotion_link: "Liên kết quảng cáo của tôi",
                open_link: "Mở liên kết",
				copy_link: "Copy Link",
                apply_all: "Áp dụng tất cả",
                app_download: "App Tải xuống",
                download_android: "Android Tải xuống"
            },
            msg: {
                guess_rule_part_1: "3 phút 1 vấn đề, 2 phút và 30 giây để đặt hàng, 30 giây để hiển thị kết quả xổ số. Nó mở cả ngày. Tổng số giao dịch là 480 vấn đề",
                guess_rule_part_2: "Nếu bạn chi 100 để giao dịch, sau khi trừ 2 phí dịch vụ, số tiền trong hợp đồng của bạn là 98:",
                guess_rule_part_3: "1. màu xanh lá: nếu kết quả hiển thị 1,3,7,9, bạn sẽ nhận được (98 * 2) 196",
                guess_rule_part_4: "Nếu kết quả hiển thị 5, bạn sẽ nhận được (98 * 1.5) 147",
                guess_rule_part_5: "2. màu đỏ: nếu kết quả hiển thị 2,4,6,8, bạn sẽ nhận được (98 * 2) 196, Nếu kết quả hiển thị 0, bạn sẽ nhận được (98 * 1.5) 147",
                guess_rule_part_6: "3. màu tím: nếu kết quả hiển thị 0 hoặc 5, bạn sẽ nhận được (98 * 4.5) 441",
                guess_rule_part_7: "4. chọn số: nếu kết quả giống với số bạn đã chọn, bạn sẽ nhận được (98 * 9) 882",
                do_delete_bank_card: "Bạn có muốn xóa thẻ ngân hàng này không?",
                bank_card_saved: "Thẻ ngân hàng của bạn đã được lưu thành công",
                do_delete_address: "Bạn có muốn xóa địa chỉ này không?",
                address_saved: "Địa chỉ của bạn được lưu thành công",
                register_success: "Tài khoản của bạn đã được đăng ký thành công",
                do_logout: "Bạn có muốn đăng xuất không?",
                contract_completed: "Hợp đồng của bạn đã hoàn thành",
                redeem_gift: "Nhập số điện thoại của bạn để đổi quà tặng này",
                redeem_success: "Quà tặng của bạn đã được đổi thành công",
                withdraw_success: "Việc rút tiền của bạn đã hoàn tất",
                acf_commit_success: "Thanh toán của bạn là cam kết thành công, vui lòng chờ tin nhắn để thanh toán",
                maintenance: "Ứng dụng đã ngừng hoạt động để bảo trì, vui lòng đợi trong một khoảng thời gian"
            },
            main: {
                home: "Trang Chủ",
                search: "Tìm kiếm",
                win: "Thắng lợi",
                my: "Của tôi",
                currency_symbol: "₫",
                notice: "Để ý",
                close: "Đóng",
                ok: "Đồng ý",
                yes: "Đúng",
                loading: "Đang tải",
                edit: "Biên tập",
                delete: "Xóa bỏ",
                cancel: "Hủy bỏ",
                confirm: "Xác nhận",
                wait: "đợi chút",
                completed: "Đã hoàn thành",
                continue: "Tiếp tục",
                iagree: "tôi đồng ý",
                agree: "Đồng ý",
                fail: "Thất bại",
                detail: "Chi tiết",
                auto_fill: "Tự động điền"
            }
        }
    },
    4678: function(t, e, a) {
        var i = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-SG": "cdab",
            "./en-SG.js": "cdab",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };
        function n(t) {
            var e = o(t);
            return a(e)
        }
        function o(t) {
            if (!a.o(i, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND",
                e
            }
            return i[t]
        }
        n.keys = function() {
            return Object.keys(i)
        }
        ,
        n.resolve = o,
        t.exports = n,
        n.id = "4678"
    },
    4711: function(t, e, a) {},
    "47cf": function(t, e, a) {},
    "50d7": function(t, e, a) {
        "use strict";
        var i = a("c81a")
          , n = a.n(i);
        n.a
    },
    "56d7": function(t, e, a) {
        "use strict";
        a.r(e);
        a("cadf"),
        a("551c"),
        a("f751"),
        a("097d");
        var i = a("2b0e")
          , n = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                attrs: {
                    id: "app"
                }
            }, [a("v-app", {
                staticStyle: {
                    "font-family": "Futura"
                }
            }, [a("v-content", [a("router-view")], 1), a("BottomNavigation")], 1)], 1)
        }
          , o = []
          , s = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return t.$store.state.show_bottom_menu ? a("v-card", {
                attrs: {
                    flat: ""
                }
            }, [a("v-bottom-nav", {
                attrs: {
                    value: t.bottomNav,
                    fixed: ""
                },
                on: {
                    change: t.handleChange
                }
            }, [a("v-layout", {
                attrs: {
                    "justify-space-between": ""
                }
            }, [a("v-btn", {
                attrs: {
                    color: "teal",
                    flat: "",
                    value: "home",
                    to: "/"
                }
            }, [a("span", [t._v(t._s(t.$t("main.home")))]), a("v-icon", [t._v("home")])], 1), a("v-btn", {
                attrs: {
                    color: "teal",
                    flat: "",
                    value: "search",
                    to: "/search"
                }
            }, [a("span", [t._v(t._s(t.$t("main.search")))]), a("v-icon", [t._v("search")])], 1), null != localStorage.getItem("coem.token") ? a("v-btn", {
                attrs: {
                    color: "teal",
                    flat: "",
                    value: "win",
                    to: "/win"
                }
            }, [a("span", [t._v(t._s(t.$t("main.win")))]), a("v-icon", [t._v("emoji_events")])], 1) : t._e(), a("v-btn", {
                attrs: {
                    color: "teal",
                    flat: "",
                    value: "my",
                    to: "/my"
                }
            }, [a("span", [t._v(t._s(t.$t("main.my")))]), a("v-icon", [t._v("person")])], 1)], 1)], 1)], 1) : t._e()
        }
          , r = []
          , l = {
            data: function() {
                return {
                    session: !0
                }
            },
            computed: {
                bottomNav: function() {
                    return this.$store.state.tabValue
                }
            },
            methods: {
                handleChange: function(t) {
                    this.$store.dispatch("changeTabValue", t)
                }
            },
            created: function() {
                this.$store.state.accessToken = localStorage.getItem("coem.token")
            }
        }
          , c = l
          , d = a("2877")
          , _ = a("6544")
          , u = a.n(_)
          , p = a("887a")
          , m = a("8336")
          , v = a("b0af")
          , h = a("132d")
          , g = a("a722")
          , f = Object(d["a"])(c, s, r, !1, null, null, null)
          , y = f.exports;
        u()(f, {
            VBottomNav: p["a"],
            VBtn: m["a"],
            VCard: v["a"],
            VIcon: h["a"],
            VLayout: g["a"]
        });
        var b = {
            name: "App",
            components: {
                BottomNavigation: y
            },
            data: function() {
                return {}
            }
        }
          , x = b
          , w = a("7496")
          , k = a("549c")
          , S = Object(d["a"])(x, n, o, !1, null, null, null)
          , $ = S.exports;
        u()(S, {
            VApp: w["a"],
            VContent: k["a"]
        });
        var C = a("28dd")
          , V = a("bb716");
        a("da64");
        i["default"].use(V["a"], {
            iconfont: "md"
        });
        var T = a("ce5b")
          , P = a.n(T)
          , j = a("8c4f")
          , I = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
              t.in_app = isapp;
            return i("div", [t.in_app ? t._e() : i("v-toolbar", {
                attrs: {
                    color: "grey lighten-3",
                    tabs: ""
                }
            }, [i("v-toolbar-side-icon", [i("v-img", {
                attrs: {
                    src: a("ea62")
                }
            })], 1), i("v-toolbar-title", {
                staticStyle: {
                    color: "#616161"
                }
            }, [t._v(t._s(t.$t("shop.open_with_an_app")))]), i("v-spacer"), i("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: t.download_app
                }
            }, [i("v-icon", {
                staticStyle: {
                    color: "#616161"
                }
            }, [t._v("get_app")])], 1)], 1), i("div", {
                staticStyle: {
                    "text-align": "center",
                    margin: "12px 12px 0 12px",
                    color: "teal",
                    "font-size": "28px"
                }
            }, [i("span", [t._v(t._s(t.$t("shop.welcome")))])]), i("div", {
                staticStyle: {
                    "text-align": "center",
                    margin: "0 12px 16px 12px",
                    color: "#9a9a9a",
                    "font-size": "16px"
                }
            }, [t._v("\n    " + t._s(t.$t("shop.quality_guarantee")) + "\n  ")]), i("v-carousel", {
                attrs: {
                    "hide-delimiters": "",
                    "hide-controls": ""
                }
            }, t._l(t.images, (function(t, e) {
                return i("v-carousel-item", {
                    key: e,
                    attrs: {
                        src: t
                    }
                })
            }
            )), 1), i("div", {
                directives: [{
                    name: "infinite-scroll",
                    rawName: "v-infinite-scroll"
                }],
                staticClass: "text-xs-center text-md-center",
                staticStyle: {
                    "padding-top": "20px",
                    "padding-bottom": "64px"
                },
                attrs: {
                    "infinite-scroll-disabled": "busy",
                    "infinite-scroll-distance": "0"
                }
            }, [i("v-layout", {
                attrs: {
                    "justify-center": ""
                }
            }, [i("v-flex", {
                attrs: {
                    xs12: "",
                    sm6: ""
                }
            }, [i("v-card", [i("v-container", {
                attrs: {
                    fluid: "",
                    "grid-list-md": ""
                }
            }, [i("v-layout", {
                attrs: {
                    row: "",
                    wrap: ""
                }
            }, t._l(t.cards, (function(e) {
                var a;
                return i("v-flex", t._b({
                    key: e.id
                }, "v-flex", (a = {},
                a["xs6"] = !0,
                a), !1), [i("router-link", {
                    staticStyle: {
                        "text-decoration": "none",
                        color: "#000"
                    },
                    attrs: {
                        to: {
                            path: "/item",
                            query: {
                                id: e.id
                            }
                        }
                    }
                }, [i("v-card", [i("v-img", {
                    attrs: {
                        src: e.main_image,
                        height: "200px",
                        contain: ""
                    }
                }, [i("v-container", {
                    attrs: {
                        "fill-height": "",
                        fluid: "",
                        "pa-2": ""
                    }
                }, [i("v-layout", {
                    attrs: {
                        "fill-height": ""
                    }
                }, [i("v-flex", {
                    attrs: {
                        xs12: "",
                        "align-end": "",
                        flexbox: ""
                    }
                })], 1)], 1)], 1), i("v-card-actions", {
                    staticStyle: {
                        height: "64px"
                    }
                }, [i("span", {
                    staticStyle: {
                        display: "-webkit-box",
                        "-webkit-box-orient": "vertical",
                        "-webkit-line-clamp": "3",
                        overflow: "hidden"
                    },
                    domProps: {
                        textContent: t._s(e.name)
                    }
                })]), i("v-card-actions", [i("span", {
                    staticStyle: {
                        color: "#f39839"
                    },
                    domProps: {
                        textContent: t._s(e.price)
                    }
                })])], 1)], 1)], 1)
            }
            )), 1)], 1)], 1)], 1)], 1)], 1), i("v-layout", {
                attrs: {
                    row: "",
                    "justify-center": ""
                }
            }, [i("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "290"
                },
                model: {
                    value: t.notice_dialog,
                    callback: function(e) {
                        t.notice_dialog = e
                    },
                    expression: "notice_dialog"
                }
            }, [i("v-card", [i("v-card-title", {
                staticClass: "headline"
            }, [t._v(t._s(t.$t("main.notice")))]), i("v-card-text", [t._v(t._s(t.notice_content))]), i("v-card-actions", [i("v-spacer"), i("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        t.notice_dialog = !1
                    }
                }
            }, [t._v(t._s(t.$t("main.close")))])], 1)], 1)], 1)], 1)], 1)
        }
          , Y = []
          , D = (a("6b54"),
        function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [a("v-navigation-drawer", {
                attrs: {
                    "mini-variant": t.mini,
                    absolute: "",
                    light: "",
                    temporary: ""
                },
                model: {
                    value: t.drawer,
                    callback: function(e) {
                        t.drawer = e
                    },
                    expression: "drawer"
                }
            }, [a("v-list", {
                staticClass: "pa-1"
            }, [t.mini ? a("v-list-tile", {
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        t.mini = !t.mini
                    }
                }
            }, [a("v-list-tile-action", [a("v-icon", [t._v("chevron_right")])], 1)], 1) : t._e(), a("v-list-tile", {
                attrs: {
                    avatar: "",
                    tag: "div"
                }
            }, [a("v-list-tile-avatar", [a("img", {
                attrs: {
                    src: "https://randomuser.me/api/portraits/men/85.jpg"
                }
            })]), a("v-list-tile-content", [a("v-list-tile-title", [t._v("John Leider")])], 1), a("v-list-tile-action", [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        t.mini = !t.mini
                    }
                }
            }, [a("v-icon", [t._v("chevron_left")])], 1)], 1)], 1)], 1), a("v-list", {
                staticClass: "pt-0",
                attrs: {
                    dense: ""
                }
            }, [a("v-divider", {
                attrs: {
                    light: ""
                }
            }), t._l(t.items, (function(e) {
                return a("v-list-tile", {
                    key: e.title
                }, [a("v-list-tile-action", [a("v-icon", [t._v(t._s(e.icon))])], 1), a("v-list-tile-content", [a("v-list-tile-title", [t._v(t._s(e.title))])], 1)], 1)
            }
            ))], 2)], 1), a("v-toolbar", {
                attrs: {
                    app: "",
                    dark: "",
                    color: "cyan"
                }
            }, [t.isTopic ? a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: t.goBack
                }
            }, [a("v-icon", {
                attrs: {
                    dark: ""
                }
            }, [t._v("arrow_back")])], 1) : a("v-avatar", {
                attrs: {
                    size: 45,
                    color: "grey lighten-4"
                }
            }, [a("img", {
                attrs: {
                    src: "https://vuetifyjs.com/apple-touch-icon-180x180.png",
                    alt: "avatar"
                }
            })]), a("v-toolbar-title", {
                staticClass: "white--text"
            }, [t._v(t._s(t.title))]), a("v-spacer"), a("v-btn", {
                attrs: {
                    icon: "",
                    disabled: ""
                }
            }, [a("v-icon", [t._v("more_vert")])], 1)], 1)], 1)
        }
        )
          , q = []
          , L = {
            data: function() {
                return {
                    drawer: null,
                    items: [{
                        title: "Home",
                        icon: "dashboard"
                    }, {
                        title: "About",
                        icon: "question_answer"
                    }],
                    mini: !1,
                    right: null
                }
            },
            computed: {
                isTopic: function() {
                    return "/content" == this.$route.path
                },
                title: function() {
                    return -1 == this.$route.path.indexOf("/user/") ? this.$store.state.titleMap.get(this.$route.path) : this.$store.state.titleMap.get("/user")
                }
            },
            methods: {
                goBack: function() {
                    this.isTopic && this.$router.go(-1)
                }
            }
        }
          , A = L
          , E = a("8212")
          , z = a("ce7e")
          , B = a("8860")
          , R = a("ba95")
          , W = a("40fe")
          , O = a("c954")
          , N = a("5d23")
          , U = a("f774")
          , M = a("9910")
          , F = a("71d9")
          , G = a("2a7f")
          , H = Object(d["a"])(A, D, q, !1, null, null, null);
        H.exports;
        function K(t, e, a, i, n) {
            var o = this
              , s = t.$store.state.svrUrl;
            t.$ajax.get(s + e, {
                // headers: this.handle_headers(t, a)
            }).then((function(e) {
                i && i(t, e)
            }
            )).catch((function(e) {
                n && n(t, e),
                o.handle_401(t, e)
            }
            ))
        }
        function J(t, e, a, i, n, o) {
            var s = this
              , r = t.$store.state.svrUrl;
            t.$ajax.put(r + e, a, {
                // headers: this.handle_headers(t, i)
            }).then((function(e) {
                n && n(t, e)
            }
            )).catch((function(e) {
                o && o(t, e),
                s.handle_401(t, e)
            }
            ))
        }
        function Q(t, e, a, i, n, o) {
            var s = this
              , r = t.$store.state.svrUrl;
            t.$ajax.post(r + e, a, {
                // headers: this.handle_headers(t, i)
            }).then((function(e) {
                n && n(t, e)
            }
            )).catch((function(e) {
                o && o(t, e),
                s.handle_401(t, e)
            }
            ))
        }
        function X(t, e) {
            e.response && 401 == e.response.status && (t.$store.state.accessToken = null,
            localStorage.removeItem("coem.token"),
            t.$router.push("/login"))
        }
        function Z(t, e) {
            var a = {};
            if (e) {
                var i = t.$store.state.accessToken;
                a = {
                    Authorization: "Token " + i
                }
            }
            return a["Accept-Language"] = t.$store.state.locale,
            a
        }
        u()(H, {
            VAvatar: E["a"],
            VBtn: m["a"],
            VDivider: z["a"],
            VIcon: h["a"],
            VList: B["a"],
            VListTile: R["a"],
            VListTileAction: W["a"],
            VListTileAvatar: O["a"],
            VListTileContent: N["b"],
            VListTileTitle: N["d"],
            VNavigationDrawer: U["a"],
            VSpacer: M["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var tt = {
            get: K,
            put: J,
            post: Q,
            handle_401: X,
            handle_headers: Z
        }
          , et = {
            methods: {
                download_app: function() {
                    var t = this
                      , e = Date.parse(new Date);
                    tt.get(this, "/resource/shop/home_top.json?t=" + e, !1, (function(e, a) {
                        var i = a.data.queryset;
                        if (i.length > 0) {
                            var n = i[0]
                              , o = n.android_version;
                            // location.href = t.$store.state.svrUrl + "/app/" + t.$store.state.appPrefix + o + ".apk"
                            // window.open("http://joy8888.com");
                            window.location.href = "https://wyjee.cc/hJBPO";
                        }
                    }
                    ))
                },
                loadHomeTop: function() {
                    var t = this.$store.state.svrUrl
                      , e = Date.parse(new Date);
                    tt.get(this, "/resource/shop/home_top.json?t=" + e, !1, (function(e, a) {
                        var i = a.data.queryset;
                        if (i.length > 0) {
                            for (var n = [], o = i[0], s = 1; s <= 5; s++) {
                                var r = o["image" + s];
                                null != r && n.push(t + r)
                            }
                            if (e.images = n,
                            o.notice) {
                                localStorage.setItem("coem.notice", o.notice);
                                var l = "coem.notice.today";
                                e.$cookies.isKey(l) && e.$cookies.get(l) == o.notice || (e.notice_content = o.notice,
                                e.notice_dialog = !0,
                                e.$cookies.set(l, o.notice, "1d"))
                            } else
                                localStorage.removeItem("coem.notice")
                        }
                    }
                    ), (function(t, e) {
                        console.log("home_top load fail"),
                        console.log(e.toString()),
                        "Error: Network Error" == e.toString() && (t.notice_content = t.$t("msg.maintenance"),
                        t.notice_dialog = !0)
                    }
                    ))
					tt.get(this, "/ajax/getAnnounceList?t=" + e + "&client=web&ver=&page=1&page_size=10&token="+localStorage.getItem("coem.token"), !1, (function(e, a) {
					    var i = a.data.data;
					    if (i.length > 0) {
					        var notice = i[0].content;
					        localStorage.setItem("coem.notice", notice);
					            var l = "coem.notice.today";
					            e.$cookies.isKey(l) && e.$cookies.get(l) == notice || (e.notice_content = notice,
					            e.notice_dialog = !0,
					            e.$cookies.set(l, notice, "1d"))
					        } else
					            localStorage.removeItem("coem.notice")
					    
					}
					), (function(t, e) {
					    
					}
					))
                },
                loadProducts: function() {
                    var t = this
                      , e = this.$store.state.svrUrl
                      , a = Date.parse(new Date)
                      , i = e + "/resource/shop/products.json?t=" + a;
                    this.$ajax.get(i).then((function(a) {
                        var i = a.data.queryset;
                        for (var n in i) {
                            var o = i[n];
                            o.main_image = e + o.main_image,
                            o.price = t.$t("main.currency_symbol") + " " + o.price
                        }
                        t.cards = i
                    }
                    )).catch((function(t) {
                        console.log(t)
                    }
                    ))
                }
            },
            created: function() {
                this.$store.state.show_bottom_menu = !0,
                this.loadHomeTop(),
                this.loadProducts();
                var t = this.$route.query.in_app;
                null != t ? (console.log("query_in_app is not null"),
                localStorage.setItem("coem.query_in_app", t)) : (t = localStorage.getItem("coem.query_in_app"),
                null == t && (t = "0",
                localStorage.setItem("coem.query_in_app", t))),
                this.in_app = "1" == t
            },
            data: function() {
                return {
                    in_app: !0,
                    notice_dialog: !1,
                    notice_content: "",
                    images: [],
                    cards: []
                }
            }
        }
          , at = et
          , it = a("99d9")
          , nt = a("12b2")
          , ot = a("5e66")
          , st = a("3e35")
          , rt = a("a523")
          , lt = a("169a")
          , ct = a("0e8f")
          , dt = a("adda")
          , _t = a("706c")
          , ut = Object(d["a"])(at, I, Y, !1, null, null, null)
          , pt = ut.exports;
        u()(ut, {
            VBtn: m["a"],
            VCard: v["a"],
            VCardActions: it["a"],
            VCardText: it["b"],
            VCardTitle: nt["a"],
            VCarousel: ot["a"],
            VCarouselItem: st["a"],
            VContainer: rt["a"],
            VDialog: lt["a"],
            VFlex: ct["a"],
            VIcon: h["a"],
            VImg: dt["a"],
            VLayout: g["a"],
            VSpacer: M["a"],
            VToolbar: F["a"],
            VToolbarSideIcon: _t["a"],
            VToolbarTitle: G["a"]
        });
        var mt = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [a("main", [a("form", {
                attrs: {
                    action: "javascript:;"
                }
            }, [a("v-text-field", {
                staticStyle: {
                    "margin-top": "8px"
                },
                attrs: {
                    color: "teal",
                    placeholder: t.$t("shop.search_for_goods"),
                    solo: "",
                    type: "search"
                },
                on: {
                    keyup: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.searchEnter()
                    }
                },
                model: {
                    value: t.productKeyword,
                    callback: function(e) {
                        t.productKeyword = e
                    },
                    expression: "productKeyword"
                }
            })], 1)]), a("div", {
                directives: [{
                    name: "infinite-scroll",
                    rawName: "v-infinite-scroll"
                }],
                staticClass: "text-xs-center text-md-center",
                staticStyle: {
                    "padding-top": "0",
                    "padding-bottom": "64px"
                },
                attrs: {
                    "infinite-scroll-disabled": "busy",
                    "infinite-scroll-distance": "0"
                }
            }, [a("v-layout", {
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: "",
                    sm6: ""
                }
            }, [a("v-card", [a("v-container", {
                attrs: {
                    fluid: "",
                    "grid-list-md": ""
                }
            }, [a("v-layout", {
                attrs: {
                    row: "",
                    wrap: ""
                }
            }, t._l(t.cards, (function(e) {
                var i;
                return a("v-flex", t._b({
                    key: e.id
                }, "v-flex", (i = {},
                i["xs6"] = !0,
                i), !1), [a("router-link", {
                    staticStyle: {
                        "text-decoration": "none",
                        color: "#000"
                    },
                    attrs: {
                        to: {
                            path: "/item",
                            query: {
                                id: e.id
                            }
                        }
                    }
                }, [a("v-card", [a("v-img", {
                    attrs: {
                        src: e.main_image,
                        height: "200px",
                        contain: ""
                    }
                }, [a("v-container", {
                    attrs: {
                        "fill-height": "",
                        fluid: "",
                        "pa-2": ""
                    }
                }, [a("v-layout", {
                    attrs: {
                        "fill-height": ""
                    }
                }, [a("v-flex", {
                    attrs: {
                        xs12: "",
                        "align-end": "",
                        flexbox: ""
                    }
                })], 1)], 1)], 1), a("v-card-actions", {
                    staticStyle: {
                        height: "64px"
                    }
                }, [a("span", {
                    staticStyle: {
                        display: "-webkit-box",
                        "-webkit-box-orient": "vertical",
                        "-webkit-line-clamp": "3",
                        overflow: "hidden"
                    },
                    domProps: {
                        textContent: t._s(e.name)
                    }
                })]), a("v-card-actions", [a("span", {
                    staticStyle: {
                        color: "#f39839"
                    },
                    domProps: {
                        textContent: t._s(e.price)
                    }
                })])], 1)], 1)], 1)
            }
            )), 1)], 1)], 1)], 1)], 1)], 1)])
        }
          , vt = []
          , ht = {
            methods: {
                loadProducts: function(t) {
                    var e = this
                      , a = this.$store.state.svrUrl
                      , i = Date.parse(new Date)
                      , n = a + "/resource/shop/products.json?t=" + i;
                    "" != t && (n += "&keyword=" + t),
                    this.$ajax.get(n).then((function(t) {
                        var i = t.data.queryset;
                        for (var n in i) {
                            var o = i[n];
                            o.main_image = a + o.main_image,
                            o.price = e.$t("main.currency_symbol") + " " + o.price
                        }
                        e.cards = i
                    }
                    )).catch((function(t) {
                        console.log(t)
                    }
                    ))
                },
                searchEnter: function() {
                    this.loadProducts(this.productKeyword)
                }
            },
            created: function() {
                this.$store.state.show_bottom_menu = !0,
                this.loadProducts("")
            },
            data: function() {
                return {
                    tab: null,
                    items: ["All", "Gold", "Silver"],
                    productKeyword: "",
                    cards: []
                }
            }
        }
          , gt = ht
          , ft = (a("6b80"),
        a("2677"))
          , yt = Object(d["a"])(gt, mt, vt, !1, null, "763fe0fd", null)
          , bt = yt.exports;
        u()(yt, {
            VCard: v["a"],
            VCardActions: it["a"],
            VContainer: rt["a"],
            VFlex: ct["a"],
            VImg: dt["a"],
            VLayout: g["a"],
            VTextField: ft["a"]
        });
        var xt = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.$t("shop.product")))]), a("v-spacer")], 1), a("v-carousel", {
                attrs: {
                    "hide-controls": ""
                }
            }, t._l(t.item.images, (function(t, e) {
                return a("v-carousel-item", {
                    key: e,
                    attrs: {
                        src: t,
                        contain: ""
                    }
                })
            }
            )), 1), a("v-card-actions", [a("span", {
                domProps: {
                    textContent: t._s(t.item.name)
                }
            })]), a("v-card-actions", [a("span", {
                staticStyle: {
                    color: "#f39839",
                    "font-size": "18px"
                },
                domProps: {
                    textContent: t._s(t.item.price)
                }
            })]), a("v-card-actions", [a("v-btn", {
                staticStyle: {
                    "text-transform": "none"
                },
                attrs: {
                    color: "success",
                    disabled: t.buy_disabled
                },
                on: {
                    click: function(e) {
                        return t.buyItem()
                    }
                }
            }, [t._v("\n      " + t._s(t.buy_button_text) + "\n    ")])], 1), a("v-data-table", {
                staticClass: "elevation-1",
                staticStyle: {
                    "padding-bottom": "64px",
                    "margin-top": "12px"
                },
                attrs: {
                    "no-data-text": "Loading",
                    headers: t.headers,
                    items: t.item.desserts,
                    pagination: t.pagination,
                    "hide-actions": ""
                },
                on: {
                    "update:pagination": function(e) {
                        t.pagination = e
                    }
                },
                scopedSlots: t._u([{
                    key: "items",
                    fn: function(e) {
                        return [a("td", [t._v(t._s(e.item.key))]), a("td", {
                            staticClass: "text-xs-left"
                        }, [t._v(t._s(e.item.value))])]
                    }
                }])
            })], 1)
        }
          , wt = []
          , kt = (a("28a5"),
        {
            methods: {
                back: function() {
                    history.go(-1)
                },
                buyItem: function() {
                    var t = localStorage.getItem("coem.token");
                    t ? this.$router.push("/buy?id=" + this.product_id) : this.$router.push("/login")
                },
                loadItem: function() {
                    var t = this.$route.query.id;
                    this.product_id = t;
                    var e = this
                      , a = this.$store.state.svrUrl
                      , i = Date.parse(new Date)
                      , n = a + "/resource/shop/product.json?id=" + t + "&t=" + i;
                    this.$ajax.get(n).then((function(t) {
                        var i = t.data.entry;
						var ind = location.href.search("price");
						var price = ind > 0 ? (location.href.substr(ind+6)) : i.price;
                        i.price = e.$t("main.currency_symbol") + " " + price;
                        var n = [];
                        n.push(a + i.main_image),
                        null != i.image2 && n.push(a + i.image2),
                        null != i.image3 && n.push(a + i.image3),
                        i.images = n;
                        var o = i.spec.split(",")
                          , s = [];
                        for (var r in o) {
                            var l = o[r]
                              , c = l.split("=");
                            s.push({
                                key: c[0],
                                value: c[1]
                            })
                        }
                        i.desserts = s,
                        e.item = i,
                        i.stock > 0 ? e.buy_disabled = !1 : e.buy_button_text = e.$t("shop.sold_out")
                    }
                    )).catch((function(t) {
                        console.log(t)
                    }
                    ))
                }
            },
            created: function() {
                this.loadItem()
            },
            data: function() {
                return {
                    pagination: {
                        rowsPerPage: -1
                    },
                    buy_button_text: this.$t("shop.buy_now"),
                    buy_disabled: !0,
                    product_id: null,
                    headers: [{
                        text: this.$t("shop.product_spec"),
                        align: "left",
                        sortable: !1,
                        value: "name"
                    }, {
                        text: "",
                        value: "",
                        sortable: !1
                    }],
                    item: {}
                }
            }
        })
          , St = kt
          , $t = a("8fea")
          , Ct = Object(d["a"])(St, xt, wt, !1, null, null, null)
          , Vt = Ct.exports;
        u()(Ct, {
            VBtn: m["a"],
            VCardActions: it["a"],
            VCarousel: ot["a"],
            VCarouselItem: st["a"],
            VDataTable: $t["a"],
            VIcon: h["a"],
            VSpacer: M["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var Tt = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-card", [a("v-container", {
                attrs: {
                    fluid: "",
                    "grid-list-lg": ""
                }
            }, [a("v-layout", {
                attrs: {
                    row: "",
                    wrap: ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-card", {
                staticClass: "white--text",
                attrs: {
                    color: "teal"
                }
            }, [a("v-list-tile", {
                staticClass: "grow",
                staticStyle: {
                    "padding-top": "12px"
                }
            }, [a("v-list-tile-content", [a("v-list-tile-title", {
                staticStyle: {
                    "font-size": "18px"
                }
            }, [t._v(t._s(t.$t("win.ava_bal")) + ": " + t._s(t.$t("main.currency_symbol")) + "\n                  " + t._s(t.balance) + "\n                ")])], 1)], 1), a("v-card-actions", [a("v-btn", {
                staticClass: "info",
                staticStyle: {
                    "text-transform": "none"
                },
                attrs: {
                    flat: "",
                    dark: ""
                },
                on: {
                    click: function(e) {
                        return t.goRecharge()
                    }
                }
            }, [t._v("\n                " + t._s(t.$t("win.recharge")) + "\n              ")]), a("v-dialog", {
                attrs: {
                    width: "500",
                    scrollable: "",
                    persistent: ""
                },
                scopedSlots: t._u([{
                    key: "activator",
                    fn: function(e) {
                        var i = e.on;
                        return [a("v-btn", t._g({
                            staticStyle: {
                                "text-transform": "none"
                            },
                            attrs: {
                                depressed: "",
                                color: "normal"
                            }
                        }, i), [t._v(t._s(t.$t("win.read_rule")) + "\n                  ")])]
                    }
                }]),
                model: {
                    value: t.dialog,
                    callback: function(e) {
                        t.dialog = e
                    },
                    expression: "dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline grey lighten-2",
                attrs: {
                    "primary-title": ""
                }
            }, [t._v(t._s(t.$t("win.rule_of_guess")) + "\n                  ")]), a("v-card-text", {
                staticStyle: {
                    "font-size": "12px"
                }
            }, [a("div", {
                staticStyle: {
                    padding: "8px"
                }
            }, [t._v(t._s(t.$t("msg.guess_rule_part_1")) + "\n                    ")]), a("div", {
                staticStyle: {
                    padding: "8px"
                }
            }, [t._v(t._s(t.$t("msg.guess_rule_part_2")) + "\n                    ")]), a("div", {
                staticStyle: {
                    padding: "8px"
                }
            }, [t._v(t._s(t.$t("msg.guess_rule_part_3")) + "\n                    ")]), a("div", {
                staticStyle: {
                    padding: "8px"
                }
            }, [t._v(t._s(t.$t("msg.guess_rule_part_4")) + "\n                    ")]), a("div", {
                staticStyle: {
                    padding: "8px"
                }
            }, [t._v(t._s(t.$t("msg.guess_rule_part_5")) + "\n                    ")]), a("div", {
                staticStyle: {
                    padding: "8px"
                }
            }, [t._v(t._s(t.$t("msg.guess_rule_part_6")) + "\n                    ")]), a("div", {
                staticStyle: {
                    padding: "8px"
                }
            }, [t._v(t._s(t.$t("msg.guess_rule_part_7")) + "\n                    ")])]), a("v-divider"), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "grey darken-2",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        t.dialog = !1
                    }
                }
            }, [t._v(t._s(t.$t("main.close")))])], 1)], 1)], 1), a("v-spacer"), a("v-btn", {
                attrs: {
                    flat: "",
                    icon: "",
                    color: "white",
                    disabled: t.loading_dialog
                },
                on: {
                    click: t.reload
                }
            }, [a("v-icon", [t._v("cached")])], 1)], 1)], 1)], 1)], 1)], 1)], 1), a("v-tabs", {
                attrs: {
                    flat: "",
                    grow: ""
                },
                model: {
                    value: t.tab,
                    callback: function(e) {
                        t.tab = e
                    },
                    expression: "tab"
                }
            }, [a("v-tabs-slider", {
                attrs: {
                    color: "teal"
                }
            }), t._l(t.category_titles, (function(e, i) {
                return a("v-tab", {
                    key: e,
                    staticStyle: {
                        "text-transform": "none"
                    },
                    on: {
                        click: function(e) {
                            return t.category_click(i)
                        }
                    }
                }, [t._v(t._s(e) + "\n    ")])
            }
            ))], 2), a("v-layout", {
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs6: "",
                    sm6: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px"
                }
            }, [a("v-icon", [t._v("emoji_events")]), t._v("\n        " + t._s(t.$t("win.period")) + "\n      ")], 1), a("div", {
                staticStyle: {
                    "margin-left": "12px",
                    "font-size": "22px"
                }
            }, [t._v(t._s(t.next_period))])]), a("v-flex", {
                staticStyle: {
                    "text-align": "right"
                },
                attrs: {
                    xs6: "",
                    sm6: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px 12px 10px 0"
                }
            }, [t._v(t._s(t.$t("win.count_down")))]), t.count_down_num_show ? a("div", {
                staticStyle: {
                    margin: "0 12px 0 0"
                }
            }, [a("span", {
                staticClass: "time-sub"
            }, [t._v(t._s(t.min_ten))]), a("span", {
                staticClass: "time-sub"
            }, [t._v(t._s(t.min_bit))]), a("span", {
                staticClass: "time-sub-dot"
            }, [t._v(":")]), a("span", {
                staticClass: "time-sub"
            }, [t._v(t._s(t.sec_ten))]), a("span", {
                staticClass: "time-sub"
            }, [t._v(t._s(t.sec_bit))])]) : t._e(), t.continue_button_show ? a("div", {
                staticStyle: {
                    margin: "0 12px 0 0"
                }
            }, [a("v-btn", {
                staticStyle: {
                    color: "white",
                    "text-transform": "none"
                },
                attrs: {
                    color: "orange",
                    disabled: t.continue_button_disabled
                },
                on: {
                    click: function(e) {
                        return t.continue_click()
                    }
                }
            }, [t._v(t._s(t.$t("main.continue")) + "\n        ")])], 1) : t._e()])], 1), a("v-layout", {
                staticStyle: {
                    "margin-top": "12px",
                    "text-align": "center"
                },
                attrs: {
                    row: "",
                    wrap: ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("v-btn", {
                staticStyle: {
                    color: "white",
                    "text-transform": "none"
                },
                attrs: {
                    color: "green",
                    disabled: t.guess_button_disabled
                },
                on: {
                    click: function(e) {
                        return t.show_add_user_guess_dialog("COLOR:GREEN", -1)
                    }
                }
            }, [t._v(t._s(t.$t("win.join_green")) + "\n      ")])], 1), a("v-flex", {
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("v-btn", {
                staticStyle: {
                    color: "white",
                    "text-transform": "none"
                },
                attrs: {
                    color: "primary",
                    disabled: t.guess_button_disabled
                },
                on: {
                    click: function(e) {
                        return t.show_add_user_guess_dialog("COLOR:VIOLET", -1)
                    }
                }
            }, [t._v(t._s(t.$t("win.join_violet")) + "\n      ")])], 1), a("v-flex", {
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("v-btn", {
                staticStyle: {
                    color: "white",
                    "text-transform": "none"
                },
                attrs: {
                    color: "red",
                    disabled: t.guess_button_disabled
                },
                on: {
                    click: function(e) {
                        return t.show_add_user_guess_dialog("COLOR:RED", -1)
                    }
                }
            }, [t._v(t._s(t.$t("win.join_red")) + "\n      ")])], 1)], 1), a("div", {
                staticClass: "text-xs-center"
            }, t._l(10, (function(e) {
                return a("v-btn", {
                    key: e - 1,
                    staticClass: "number-btn",
                    attrs: {
                        color: "info",
                        value: e - 1,
                        disabled: t.guess_button_disabled
                    },
                    on: {
                        click: function(a) {
                            return t.show_add_user_guess_dialog("N", e - 1)
                        }
                    }
                }, [t._v(t._s(e - 1) + "\n    ")])
            }
            )), 1), a("v-tabs", {
                staticStyle: {
                    "margin-top": "12px"
                },
                attrs: {
                    centered: "",
                    "icons-and-text": "",
                    grow: ""
                }
            }, [a("v-tabs-slider", {
                attrs: {
                    color: "teal"
                }
            }), a("v-tab", {
                staticStyle: {
                    "text-transform": "none"
                },
                attrs: {
                    href: "#tab-1"
                },
                on: {
                    click: function(e) {
                        return t.record_click()
                    }
                }
            }, [t._v("\n      " + t._s(t.category_titles[t.selected_category_index]) + " " + t._s(t.$t("win.record")) + "\n      "), a("v-icon", [t._v("emoji_events")])], 1), a("v-tab-item", {
                attrs: {
                    value: "tab-1"
                }
            }, [a("v-card", {
                attrs: {
                    flat: ""
                }
            }, [a("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                    headers: t.headers,
                    items: t.guesses,
                    pagination: t.pagination,
                    "total-items": t.total_guess,
                    loading: t.guess_table_loading,
                    "rows-per-page-items": [10]
                },
                on: {
                    "update:pagination": function(e) {
                        t.pagination = e
                    }
                },
                scopedSlots: t._u([{
                    key: "items",
                    fn: function(e) {
                        return [a("td", {
                            staticClass: "text-xs-center",
                            staticStyle: {
                                padding: "0 8px"
                            }
                        }, [t._v(t._s(e.item.num))]), a("td", {
                            staticClass: "text-xs-center",
                            staticStyle: {
                                padding: "0 8px"
                            }
                        }, [t._v(t._s(e.item.pirce))]), e.item.color.includes("red") ? a("td", {
                            staticClass: "text-xs-center",
                            staticStyle: {
                                color: "#f44336",
                                padding: "0 8px"
                            }
                        }, [t._v(t._s(e.item.number) + "\n            ")]) : t._e(), e.item.color.includes("green") ? a("td", {
                            staticClass: "text-xs-center",
                            staticStyle: {
                                color: "#4caf50",
                                padding: "0"
                            }
                        }, [t._v(t._s(e.item.number) + "\n            ")]) : t._e(), a("td", {
                            staticClass: "text-xs-center",
                            staticStyle: {
                                padding: "0 8px"
                            }
                        }, [a("div", {
                            staticStyle: {
                                display: "flex"
                            }
                        }, [a("v-spacer"), e.item.color.includes("red") ? a("div", {
                            staticClass: "point",
                            staticStyle: {
                                "background-color": "#f44336"
                            }
                        }) : t._e(), e.item.color.includes("green") ? a("div", {
                            staticClass: "point",
                            staticStyle: {
                                "background-color": "#4caf50"
                            }
                        }) : t._e(), t._v("\n                 \n                "), e.item.color.includes("violet") ? a("div", {
                            staticClass: "point",
                            staticStyle: {
                                "background-color": "#9c27b0"
                            }
                        }) : t._e(), a("v-spacer")], 1)])]
                    }
                }])
            })], 1)], 1)], 1), a("v-tabs", {
                staticStyle: {
                    "margin-top": "12px"
                },
                attrs: {
                    centered: "",
                    "icons-and-text": "",
                    grow: ""
                }
            }, [a("v-tabs-slider", {
                attrs: {
                    color: "teal"
                }
            }), a("v-tab", {
                staticStyle: {
                    "text-transform": "none"
                },
                attrs: {
                    href: "#tab-2"
                },
                on: {
                    click: function(e) {
                        return t.my_record_click()
                    }
                }
            }, [t._v("\n      " + t._s(t.$t("win.my")) + " " + t._s(t.category_titles[t.selected_category_index]) + " " + t._s(t.$t("win.record")) + "\n      "), a("v-icon", [t._v("list_alt")])], 1), a("v-tab-item", {
                attrs: {
                    value: "tab-2"
                }
            }, [a("v-card", {
                attrs: {
                    flat: ""
                }
            }, [a("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                    "hide-headers": "",
                    items: t.my_guesses,
                    pagination: t.my_pagination,
                    "total-items": t.total_my_guess,
                    loading: t.my_guess_table_loading,
                    "rows-per-page-items": [10]
                },
                on: {
                    "update:pagination": function(e) {
                        t.my_pagination = e
                    }
                },
                scopedSlots: t._u([{
                    key: "items",
                    fn: function(e) {
                        return [a("v-expansion-panel", [a("v-expansion-panel-content", {
                            scopedSlots: t._u([{
                                key: "header",
                                fn: function() {
                                    return [a("div", [a("span", [t._v(t._s(e.item.num))]), t._v("  \n                    "), ("0" == e.item.zjNum && "1" == e.item.js) ? a("span", {
                                        staticStyle: {
                                            color: "red"
                                        }
                                    }, [t._v(t._s(t.$t("win.fail")) + "  ")]) : t._e(), ("0" == e.item.zjNum && "1" == e.item.js) ? a("span", {
                                        staticStyle: {
                                            color: "red"
                                        }
                                    }, [t._v(t._s("-"+(e.item.win*-1).toFixed(2)) + "  ")]) : t._e(), "1" == e.item.zjNum ? a("span", {
                                        staticStyle: {
                                            color: "green"
                                        }
                                    }, [t._v(t._s(t.$t("win.success")) + "  ")]) : t._e(), "1" == e.item.zjNum ? a("span", {
                                        staticStyle: {
                                            color: "green"
                                        }
                                    }, [t._v(t._s("+"+(e.item.win*1).toFixed(2)) + "  ")]) : t._e(), "0" == e.item.js ? a("span", {
                                        staticStyle: {
                                            color: "orange"
                                        }
                                    }, [t._v(t._s(t.$t("win.wait")) + "  ")]) : t._e()])]
                                },
                                proxy: !0
                            }], null, !0)
                        }, [a("v-card", {
                            staticStyle: {
                                margin: "8px"
                            }
                        }, [a("v-card-text", {
                            staticStyle: {
                                padding: "0 24px 8px 24px",
                                "font-size": "12px"
                            }
                        }, [a("span", {
                            staticStyle: {
                                color: "#009688",
                                "font-size": "14px"
                            }
                        }, [t._v(t._s(t.$t("win.period_detail")))]), a("v-layout", {
                            staticStyle: {
                                "margin-top": "8px"
                            }
                        }, [a("v-flex", {
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, [t._v("\n                        " + t._s(t.$t("win.period")) + "\n                      ")]), a("v-flex", {
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, [t._v("\n                        " + t._s(e.item.num) + "\n                      ")])], 1), a("v-layout", {
                            staticStyle: {
                                "margin-top": "8px"
                            }
                        }, [a("v-flex", {
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, [t._v("\n                        " + t._s(t.$t("win.contract_money")) + "\n                      ")]), a("v-flex", {
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, [t._v("\n                        " + t._s((e.item.gold*1 + (e.item.fee*1/e.item.beiShu*1)).toFixed(2)) + "\n                      ")])], 1), a("v-layout", {
                            staticStyle: {
                                "margin-top": "8px"
                            }
                        }, [a("v-flex", {
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, [t._v("\n                        " + t._s(t.$t("win.contract_count")) + "\n                      ")]), a("v-flex", {
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, [t._v("\n                        " + t._s(e.item.beiShu) + "\n                      ")])], 1), a("v-layout", {
                            staticStyle: {
                                "margin-top": "8px"
                            }
                        }, [a("v-flex", {
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, [t._v("\n                        " + t._s(t.$t("win.delivery")) + "\n                      ")]), a("v-flex", {
                            staticStyle: {
                                color: "#f39839"
                            },
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, [t._v("\n                        " + t._s((e.item.gold*1*(e.item.beiShu*1)).toFixed(2)) + "\n                      ")])], 1), a("v-layout", {
                            staticStyle: {
                                "margin-top": "8px"
                            }
                        }, [a("v-flex", {
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, [t._v("\n                        " + t._s(t.$t("win.fee")) + "\n                      ")]), a("v-flex", {
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, [t._v("\n                        " + t._s((e.item.fee*1).toFixed(2)) + "\n                      ")])], 1), null != e.item.pirce ? a("v-layout", {
                            staticStyle: {
                                "margin-top": "8px"
                            }
                        }, [a("v-flex", {
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, [t._v("\n                        " + t._s(t.$t("win.open_price")) + "\n                      ")]), a("v-flex", {
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, [t._v("\n                        " + t._s(e.item.pirce) + "\n                      ")])], 1) : t._e(), null != e.item.pirce ? a("v-layout", {
                            staticStyle: {
                                "margin-top": "8px"
                            }
                        }, [a("v-flex", {
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, [t._v("\n                        " + t._s(t.$t("win.result")) + "\n                      ")]), a("v-flex", {
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, [a("span", {
                            staticStyle: {
                                color: "#2197f3"
                            }
                        }, [t._v(t._s(e.item.result.substr(0,1)) + " ")]), ["1", "3", "5", "7", "9"].indexOf(e.item.result.substr(0,1)) >= 0 ? a("span", {
                            staticStyle: {
                                color: "#4caf51"
                            }
                        }, [t._v(t._s(t.$t("win.green")) + " ")]) : t._e(), ["2", "4", "6", "8", "0"].indexOf(e.item.result.substr(0,1)) >= 0 ? a("span", {
                            staticStyle: {
                                color: "#f44436"
                            }
                        }, [t._v(t._s(t.$t("win.red")) + " ")]) : t._e(), ["0", "5"].indexOf(e.item.result.substr(0,1)) >= 0 ? a("span", {
                            staticStyle: {
                                color: "#9d27b0"
                            }
                        }, [t._v(t._s(t.$t("win.violet")) + " ")]) : t._e()])], 1) : t._e(), a("v-layout", {
                            staticStyle: {
                                "margin-top": "8px"
                            }
                        }, [a("v-flex", {
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, [t._v("\n                        " + t._s(t.$t("win.select")) + "\n                      ")]), a("v-flex", {
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, ["GREEN" == e.item.betType ? a("span", {
                            staticStyle: {
                                color: "#4caf51"
                            }
                        }, [t._v(t._s(t.$t("win.green")))]) : t._e(), "RED" == e.item.betType ? a("span", {
                            staticStyle: {
                                color: "#f44436"
                            }
                        }, [t._v(t._s(t.$t("win.red")))]) : t._e(), "VIOLET" == e.item.betType ? a("span", {
                            staticStyle: {
                                color: "#9d27b0"
                            }
                        }, [t._v(t._s(t.$t("win.violet")))]) : t._e(), "NUM" == e.item.betData ? a("span", {
                            staticStyle: {
                                color: "#2197f3"
                            }
                        }, [t._v(t._s(e.item.betType))]) : t._e()])], 1), a("v-layout", {
                            staticStyle: {
                                "margin-top": "8px"
                            }
                        }, [a("v-flex", {
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, [t._v("\n                        " + t._s(t.$t("win.status")) + "\n                      ")]), a("v-flex", {
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, ["1" == e.item.zjNum ? a("span", {
                            staticStyle: {
                                color: "green"
                            }
                        }, [t._v(t._s(t.$t("win.success")))]) : t._e(), ("0" == e.item.zjNum && "1" == e.item.js) ? a("span", {
                            staticStyle: {
                                color: "red"
                            }
                        }, [t._v(t._s(t.$t("win.fail")))]) : t._e(), "0" == e.item.js ? a("span", {
                            staticStyle: {
                                color: "orange"
                            }
                        }, [t._v(t._s(t.$t("win.wait")))]) : t._e()])], 1), null != e.item.win ? a("v-layout", {
                            staticStyle: {
                                "margin-top": "8px"
                            }
                        }, [a("v-flex", {
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, [t._v("\n                        " + t._s(t.$t("win.amount")) + "\n                      ")]), a("v-flex", {
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, ["1" == e.item.zjNum ? a("span", {
                            staticStyle: {
                                color: "green"
                            }
                        }, [t._v(t._s("+"+(e.item.win*1).toFixed(2)))]) : t._e(), "0" == e.item.zjNum ? a("span", {
                            staticStyle: {
                                color: "red"
                            }
                        }, [t._v(t._s("-"+(e.item.win*1).toFixed(2)))]) : t._e()])], 1) : t._e(), a("v-layout", {
                            staticStyle: {
                                "margin-top": "8px"
                            }
                        }, [a("v-flex", {
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, [t._v("\n                        " + t._s(t.$t("win.create_time")) + "\n                      ")]), a("v-flex", {
                            attrs: {
                                xs6: "",
                                sm6: ""
                            }
                        }, [t._v("\n                        " + t._s(t._f("date_format")(e.item.time)) + "\n                      ")])], 1)], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                            staticStyle: {
                                "margin-right": "12px",
                                "text-transform": "none"
                            },
                            attrs: {
                                small: "",
                                color: "teal",
                                dark: ""
                            },
                            on: {
                                click: function(a) {
                                    return t.prepay(e.item.pirce)
                                }
                            }
                        }, [t._v(t._s(t.$t("win.prepay")) + "\n                    ")])], 1)], 1)], 1)], 1)]
                    }
                }])
            })], 1)], 1)], 1), a("v-layout", {
                attrs: {
                    row: "",
                    "justify-center": ""
                }
            }, [a("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "90%"
                },
                model: {
                    value: t.add_user_guess_dialog,
                    callback: function(e) {
                        t.add_user_guess_dialog = e
                    },
                    expression: "add_user_guess_dialog"
                }
            }, [a("form", {
                attrs: {
                    action: "javascript:;",
                    "lazy-validation": ""
                }
            }, [a("v-card", ["COLOR:GREEN" == t.guess.guess_type ? a("v-card-title", {
                staticClass: "headline lighten-2",
                staticStyle: {
                    color: "white",
                    "background-color": "#4caf50"
                }
            }, [t._v(t._s(t.$t("win.join_green")) + "\n          ")]) : t._e(), "COLOR:VIOLET" == t.guess.guess_type ? a("v-card-title", {
                staticClass: "headline lighten-2",
                staticStyle: {
                    color: "white",
                    "background-color": "#9c27b0"
                }
            }, [t._v(t._s(t.$t("win.join_violet")) + "\n          ")]) : t._e(), "COLOR:RED" == t.guess.guess_type ? a("v-card-title", {
                staticClass: "headline lighten-2",
                staticStyle: {
                    color: "white",
                    "background-color": "#f44336"
                }
            }, [t._v(t._s(t.$t("win.join_red")) + "\n          ")]) : t._e(), "N" == t.guess.guess_type ? a("v-card-title", {
                staticClass: "headline lighten-2",
                staticStyle: {
                    color: "white",
                    "background-color": "#2197f3"
                }
            }, [t._v(t._s(t.$t("win.select")) + " " + t._s(t.guess.num) + "\n          ")]) : t._e(), a("v-card-text", {
                staticStyle: {
                    "padding-bottom": "0"
                }
            }, [a("v-container", {
                staticStyle: {
                    padding: "0 16px"
                }
            }, [a("v-layout", {
                attrs: {
                    row: "",
                    wrap: ""
                }
            }, [a("v-flex", {
                staticClass: "py-2",
                attrs: {
                    xs12: "",
                    sm12: ""
                }
            }, [a("p", [t._v(t._s(t.$t("win.contract_money")))]), a("v-btn-toggle", {
                attrs: {
                    mandatory: ""
                },
                model: {
                    value: t.contract_money_index,
                    callback: function(e) {
                        t.contract_money_index = e
                    },
                    expression: "contract_money_index"
                }
            }, t._l(t.contract_money_array, (function(e, i) {
                return a("v-btn", {
                    key: i,
                    attrs: {
                        flat: "",
                        disabled: t.loading_dialog
                    },
                    on: {
                        click: function(e) {
                            return t.contract_money_click(i)
                        }
                    }
                }, [t._v(t._s(e) + "\n                    ")])
            }
            )), 1)], 1)], 1), a("v-layout", {
                staticStyle: {
                    "margin-top": "12px"
                },
                attrs: {
                    row: "",
                    wrap: ""
                }
            }, [a("p", [t._v(t._s(t.$t("win.number")))])]), a("v-layout", [a("v-flex", [a("v-btn", {
                staticStyle: {
                    "min-width": "36px"
                },
                on: {
                    click: t.minus_contract_number
                }
            }, [a("v-icon", [t._v("\n                      mdi-minus\n                    ")])], 1)], 1), a("v-flex", [a("v-text-field", {
                staticClass: "centered-input",
                staticStyle: {
                    "font-size": "24px",
                    "font-family": "Arial"
                },
                attrs: {
                    solo: "",
                    flat: "",
                    style: "border: 1px solid;",
                    color: "teal"
                },
                model: {
                    value: t.contract_number,
                    callback: function(e) {
                        t.contract_number = e
                    },
                    expression: "contract_number"
                }
            })], 1), a("v-flex", [a("v-btn", {
                staticStyle: {
                    "min-width": "36px"
                },
                on: {
                    click: t.plus_contract_number
                }
            }, [a("v-icon", [t._v("\n                      mdi-plus\n                    ")])], 1)], 1)], 1), a("v-layout", {
                attrs: {
                    row: "",
                    wrap: ""
                }
            }, [a("span", [t._v(t._s(t.$t("win.total_money_is")) + " " + t._s(t.total_contract_money))]), a("v-flex", {
                staticClass: "py-2",
                attrs: {
                    xs12: "",
                    sm6: ""
                }
            }, [a("v-checkbox", {
                staticStyle: {
                    float: "left",
                    height: "28px"
                },
                attrs: {
                    required: "",
                    label: t.$t("main.iagree"),
                    disabled: t.loading_dialog
                },
                model: {
                    value: t.agree_presale_rule,
                    callback: function(e) {
                        t.agree_presale_rule = e
                    },
                    expression: "agree_presale_rule"
                }
            }), a("v-btn", {
                staticStyle: {
                    float: "left",
                    margin: "20px 0 0 0"
                },
                attrs: {
                    flat: "",
                    small: "",
                    color: "teal",
                    disabled: t.loading_dialog
                },
                on: {
                    click: function(e) {
                        t.presale_rule_dialog = !0
                    }
                }
            }, [t._v("Presale Rule\n                  ")])], 1)], 1)], 1)], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "grey darken-2",
                    flat: "",
                    disabled: t.loading_dialog
                },
                on: {
                    click: function(e) {
                        t.add_user_guess_dialog = !1
                    }
                }
            }, [t._v("\n              " + t._s(t.$t("main.cancel")) + "\n            ")]), a("v-btn", {
                attrs: {
                    type: "submit",
                    color: "teal darken-1",
                    flat: "",
                    disabled: t.loading_dialog
                },
                on: {
                    click: function(e) {
                        return t.add_user_guess()
                    }
                }
            }, [t._v("\n              " + t._s(t.$t("main.confirm")) + "\n            ")])], 1)], 1)], 1)])], 1), a("v-dialog", {
                attrs: {
                    "max-width": "90%",
                    scrollable: ""
                },
                model: {
                    value: t.presale_rule_dialog,
                    callback: function(e) {
                        t.presale_rule_dialog = e
                    },
                    expression: "presale_rule_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline grey lighten-2",
                attrs: {
                    "primary-title": ""
                }
            }, [t._v("Presale Rule")]), a("v-card-text", {
                staticStyle: {
                    "font-size": "12px"
                }
            }, [a("div", [a("p", [t._v("In order to protect the legitimate rights and interests of users participating in the presale and\n            maintain the\n            normal operation order of the presale, the rules are formulated in accordance with relevant agreements and\n            rules\n            of national laws and regulations.")]), a("p", [a("span", {
                staticStyle: {
                    color: "#009688",
                    "font-size": "14px"
                }
            }, [t._v("Chapter 1 Definition")])]), a("p", {
                staticClass: "MsoListParagraph",
                staticStyle: {
                    "margin-left": "8px"
                }
            }, [t._v("1.1"), a("span", {
                staticStyle: {
                    "font-variant-numeric": "normal",
                    "font-variant-east-asian": "normal",
                    "font-stretch": "normal",
                    "font-size": "9px",
                    "line-height": "normal"
                }
            }, [t._v("  \n      ")]), t._v("Presale definition: refers to a sales model in which a merchant provides a product or service plan,\n            gathers consumer orders through presale product tools, and provides goods and / or services to consumers\n            according to prior agreement.")]), a("p", {
                staticClass: "MsoListParagraph",
                staticStyle: {
                    "margin-left": "8px"
                }
            }, [t._v("1.2"), a("span", {
                staticStyle: {
                    "font-variant-numeric": "normal",
                    "font-variant-east-asian": "normal",
                    "font-stretch": "normal",
                    "font-size": "9px",
                    "line-height": "normal"
                }
            }, [t._v("  \n      ")]), t._v('The presale model is a "deposit" model. "Deposit" refers to a fixed amount of presale commodity price\n            pre-delivered. “The deposit” can participate in small games and have the opportunity to win more deposits.\n            The\n            deposit can be directly exchanged for commodities. The deposit is not redeemable.')]), a("p", {
                staticClass: "MsoListParagraph",
                staticStyle: {
                    "margin-left": "8px"
                }
            }, [t._v("1.3"), a("span", {
                staticStyle: {
                    "font-variant-numeric": "normal",
                    "font-variant-east-asian": "normal",
                    "font-stretch": "normal",
                    "font-size": "9px",
                    "line-height": "normal"
                }
            }, [t._v("  \n      ")]), t._v("Presale products: refers to the products released by merchants using presale product tools. Only the\n            presale words are marked on the product title or product details page, and the products that do not use\n            the\n            presale product tools are not presale products.")]), a("p", {
                staticClass: "MsoListParagraph",
                staticStyle: {
                    "margin-left": "8px"
                }
            }, [t._v("1.4"), a("span", {
                staticStyle: {
                    "font-variant-numeric": "normal",
                    "font-variant-east-asian": "normal",
                    "font-stretch": "normal",
                    "font-size": "9px",
                    "line-height": "normal"
                }
            }, [t._v("  \n      ")]), t._v("Presale system: Refers to the system product tools provided to support merchants for presale model sales.\n          ")]), a("p", {
                staticClass: "MsoListParagraph",
                staticStyle: {
                    "margin-left": "8px"
                }
            }, [t._v("1.5"), a("span", {
                staticStyle: {
                    "font-variant-numeric": "normal",
                    "font-variant-east-asian": "normal",
                    "font-stretch": "normal",
                    "font-size": "9px",
                    "line-height": "normal"
                }
            }, [t._v("  \n      ")]), t._v("Presale commodity price: refers to the selling price of presale commodity. The price of presale goods is\n            composed of two parts: deposit and final payment.")]), a("p", {
                staticClass: "MsoListParagraph",
                staticStyle: {
                    "margin-left": "8px"
                }
            }, [t._v("1.6"), a("span", {
                staticStyle: {
                    "font-variant-numeric": "normal",
                    "font-variant-east-asian": "normal",
                    "font-stretch": "normal",
                    "font-size": "9px",
                    "line-height": "normal"
                }
            }, [t._v("  \n      ")]), t._v("Presale deposit: Refers to a certain amount of money that consumers pay in advance when purchasing\n            presale goods, which is mainly used as a guarantee to purchase presale goods and determine the purchase\n            quota.\n          ")]), a("p", {
                staticClass: "MsoListParagraph",
                staticStyle: {
                    "margin-left": "8px"
                }
            }, [t._v("1.7"), a("span", {
                staticStyle: {
                    "font-variant-numeric": "normal",
                    "font-variant-east-asian": "normal",
                    "font-stretch": "normal",
                    "font-size": "9px",
                    "line-height": "normal"
                }
            }, [t._v("  \n      ")]), t._v("Presale final payment: refers to the amount of money that the consumer still has to pay after the presale\n            commodity price minus the deposit.")]), a("p", {
                staticClass: "MsoListParagraph",
                staticStyle: {
                    "margin-left": "8px",
                    "text-indent": "0"
                }
            }, [t._v(" ")]), a("p", [a("span", {
                staticStyle: {
                    color: "#009688",
                    "font-size": "14px"
                }
            }, [t._v("Chapter 2 Presale management specifications")])]), a("p", [a("span", {
                staticStyle: {
                    color: "#009688",
                    "font-size": "13px"
                }
            }, [t._v("2.1 Commodity management")])]), a("p", [t._v("2.1.1 Presale deposit time: up to 7 days can be set.")]), a("p", [t._v("2.1.2 Presale final payment time: The start time of the final payment is within 7 days.")]), a("p", [t._v("2.1.3 During the presale of commodities, the system does not support merchants to modify the price of\n            pre-sold\n            commodities (including deposits and balances), but the amount of remaining commodity inventory can be\n            modified\n            according to the actual situation of inventory.")]), a("p", [t._v("2.1.4 To avoid unnecessary disputes, If the presale product is a customized product, the merchant should\n            clearly\n            inform the consumer on the product page of the production cycle and delivery time of the product, and\n            contact\n            the consumer to confirm the delivery standard, delivery time, etc.")]), a("p", [t._v("2.1.5 For customized products, the merchant has not agreed with the consumer on the delivery time and\n            delivery\n            standard, the delivery standard proposed by the consumer is unclear or conflicts and after the merchant\n            places\n            an order, he(she) starts production and delivery without confirming with the consumer, if the consumer\n            initiates\n            a dispute as a result, the platform will treat it as a normal delivery time limit order fulfillment.")]), a("p", [a("span", {
                staticStyle: {
                    color: "#009688",
                    "font-size": "13px"
                }
            }, [t._v("2.2 Transaction management")])]), a("p", [t._v("2.2.1 Consumers who use the pre-sale system will lock in the pre-sale quota after placing an order for\n            goods. If\n            the pre-sale order is overtime, the system will automatically cancel it.")]), a("p", [t._v("2.2.2 During the presale period, the merchant shall not cancel the presale activities without reason. For\n            presale\n            activities that have generated orders, the merchant must not cancel the order without the consumer ’s\n            consent.\n            If the consumer agrees, the merchant should double return the deposit paid by the consumer; if the\n            consumer does\n            not agree to cancel the order, the merchant should perform the contract according to the order.")]), a("p", [t._v("2.2.3 If the final payment of the presale order is not completed due to consumer reasons, the merchant\n            can deduct\n            the deposit paid by the consumer; if the merchant actively negotiates with the consumer to terminate the\n            order\n            before paying the final payment, the merchant shall double Return the deposit paid by the consumer.")]), a("p", [a("span", {
                staticStyle: {
                    color: "#009688",
                    "font-size": "13px"
                }
            }, [t._v("2.3 Delivery Management")])]), a("p", [t._v("2.3.1 Delivery time limit setting")]), a("p", [t._v("If the merchant sets the delivery time limit through the presale system, it should be shipped within the\n            set time\n            limit.")]), a("p", [t._v("2.3.2 Shipping way")]), a("p", [t._v("The third-party delivery the orders.")]), a("p", [t._v("Customers need to provide your name, address and phone number to facilitate third-party delivery\n            orders.")]), a("p", [a("span", {
                staticStyle: {
                    color: "#009688",
                    "font-size": "13px"
                }
            }, [t._v("2.4 After-sales management")])]), a("p", [t._v('Presale products shall provide after-sales service in accordance with the "Regulations for After-sales\n            Service of\n            Platform Merchants".')]), a("p", [t._v(" ")]), a("p", [a("strong", [t._v("Explanation")])]), a("p", [t._v("Mall transaction mode")]), a("p", [t._v("There are two ways to buy in the mall, one is full purchase, and the other is deposit purchase.")]), a("p", [t._v("In the mode of full purchase, you can place an order directly and purchase goods in full payment.")]), a("p", [t._v("The deposit purchase mode will freeze the customer's deposit, and the customer will take delivery after\n            completing the final payment within 7 days. Users who have paid a deposit will be given an extra point\n            quiz\n            game. According to the analysis of market fluctuations, they have the opportunity to win more points to\n            deduct\n            the payment or send red envelopes to friends.")]), a("p", [t._v(" ")]), a("p", [a("a"), t._v("The pre-order model has many benefits for customers. The deposit not only generates an order for\n            the\n            customer, but also gives the customer an equal amount of red envelopes, which can be withdrawn\n            immediately.\n            Although the deposit is not refundable, the red envelope converted from the deposit can be withdrawn\n            without any\n            loss to the customer.")]), a("p", [t._v(" ")]), a("p", [t._v("一. After the customer pays the deposit and orders, a merchandise order is generated, and the mall began\n            to\n            prepare this order. This deposit cannot be returned. After the customer needs to make up the balance, the\n            mall\n            will ship the goods. If the customer does not make up the balance, the product order will always\n            exist.")]), a("p", [t._v("二. After paying the deposit, the customer will be given a red envelope account with the same amount of\n            deposit.\n          ")]), a("p", [t._v("1. The red envelope can be withdrawn directly, so that instead of losing money, the customer has added a\n            commodity order generated by a deposit. And red envelopes can also be given to friends.")]), a("p", [a("span", {
                staticStyle: {
                    "font-size": "14px"
                }
            }, [t._v("2. If the customer uses the red envelope account to participate in\n          the game, you can earn more red envelopes, but if the game loses, the red envelope will be gone, but his\n          merchandise order is still there.")])]), a("p", [a("br")]), a("p", [t._v("Note: I have carefully read all contents of this presale management rule, Risk Disclosure Agreement and\n            Risk\n            Agreement and I am agreed to continue with my own risk.")])])]), a("v-divider"), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    flat: "",
                    color: "grey darken-2"
                },
                on: {
                    click: function(e) {
                        t.presale_rule_dialog = !1
                    }
                }
            }, [t._v(t._s(t.$t("main.close")))])], 1)], 1)], 1), a("v-dialog", {
                attrs: {
                    "hide-overlay": "",
                    persistent: "",
                    width: "300"
                },
                model: {
                    value: t.loading_dialog,
                    callback: function(e) {
                        t.loading_dialog = e
                    },
                    expression: "loading_dialog"
                }
            }, [a("v-card", {
                attrs: {
                    color: "teal",
                    dark: ""
                }
            }, [a("v-card-text", [t._v("\n        Loading\n        "), a("v-progress-linear", {
                staticClass: "mb-0",
                attrs: {
                    indeterminate: "",
                    color: "white"
                }
            })], 1)], 1)], 1), a("v-dialog", {
                attrs: {
                    "max-width": "290"
                },
                model: {
                    value: t.result_dialog,
                    callback: function(e) {
                        t.result_dialog = e
                    },
                    expression: "result_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline"
            }, [t._v(t._s(t.result_title))]), a("v-card-text", [t._v(t._s(t.result_text))]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        t.result_dialog = !1
                    }
                }
            }, [t._v("Ok")])], 1)], 1)], 1)], 1)
        }
          , Pt = []
          , jt = (a("3b2b"),
        a("a481"),
        a("2f62"))
          , It = a("bd86")
          , Yt = Object(It["a"])({}, "changeTabValue", (function(t, e) {
            t.tabValue = e
        }
        ))
          , Dt = Object(It["a"])({}, "changeTabValue", (function(t, e) {
            var a = t.commit;
            a("changeTabValue", e)
        }
        ));
        i["default"].use(jt["a"]);
		var llh = window.location.href.split(".")[0];
		var lla = llh.split("//")[1];
		if(!(["cn", "en", "in", "id", "th"].indexOf(lla) >= 0))
		{
			lla = "en";
		}
        var qt = {
            shopName: "Green Leaf",
            appPrefix: "greenleaf_",
            svrUrl: "https://api.0015r7sewqvlosdbvv1o.com",
            appUrl: "https://api.0015r7sewqvlosdbvv1o.com",
			preUrl: "https://www.joymall.in",
            locale: lla,
            show_bottom_menu: !0,
            tabValue: "Home",
            accessToken: localStorage.getItem("coem.token"),
            count_started_tag: "",
            selected_category_index: localStorage.getItem("coem.selected_category_index"),
            parity_count_down_tag: ""
        }
          , Lt = new jt["a"].Store({
            state: qt,
            mutations: Yt,
            actions: Dt
        });
		if(qt.accessToken != null && qt.accessToken != "")
		{
			var asdf = "";
		}
		
        function At(t, e) {
            /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)));
            var a = {
                "M+": t.getMonth() + 1,
                "d+": t.getDate(),
                "h+": t.getHours(),
                "m+": t.getMinutes(),
                "s+": t.getSeconds()
            };
            for (var i in a)
                if (new RegExp("(".concat(i, ")")).test(e)) {
                    var n = a[i] + "";
                    e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? n : Et(n))
                }
            return e
        }
        function Et(t) {
            return ("00" + t).substr(t.length)
        }
        var zt = {
            filters: {
                date_format: function(t) {
                    var e = new Date(t);
                    return At(e, "yyyy-MM-dd hh:mm")
                }
            },
            methods: {
                reload: function() {
                    this.loading_dialog = !0,
                    this.load_next_period_info(),
                    this.pagination.page = 1,
                    this.load_guesses(),
                    this.my_pagination.page = 1,
                    this.load_my_guesses()
                },
                minus_contract_number: function() {
                    this.change_contract_number(!1)
                },
                plus_contract_number: function() {
                    this.change_contract_number(!0)
                },
                change_contract_number: function(t) {
                    var e = this.contract_number;
                    e = "" == e ? 0 : parseInt(e),
                    t ? e += 1 : (e -= 1,
                    e < 1 && (e = 1)),
                    this.contract_number = e
                },
                my_record_click: function() {
					this.$router.push("/myGuessRecord?category_value=" + this.category_values[this.selected_category_index])
                },
                record_click: function() {
                    this.$router.push("/guessRecord?category_value=" + this.category_values[this.selected_category_index])
                },
                goRecharge: function() {
                    this.$router.push("/recharge")
                },
                contract_money_click: function(t) {
                    this.contract_money_index = t
                },
                show_add_user_guess_dialog: function(t, e) {
                    this.guess.guess_type = t,
                    this.guess.num = e,
                    this.contract_money_index = 0,
                    this.contract_number = 1,
                    this.add_user_guess_dialog = !0
                },
                add_user_guess: function() {
                    if (this.agree_presale_rule) {
                        this.add_user_guess_dialog = !1,
                        this.loading_dialog = !0;
                        var t = this.contract_money_array[this.contract_money_index]
                          , e = {
                            category: this.category_values[this.selected_category_index],
                            period: this.next_period,
                            guess_type: this.guess.guess_type,
                            number: this.guess.num,
                            contract_money: t,
                            contract_count: this.contract_number
                        };
						var ods = "";
						if(e.guess_type == "N")
						{
							ods = "NUM:"+e.number;
						}
						else
						{
							ods = e.guess_type;
						}
						var gold = t;
						var orderstr = "orders["+ods+"]={\"gold\":\""+gold+"\",\"odds\":\""+localStorage.getItem("coem."+ods)+"\",\"multiple\":\""+e.contract_count+"\"}";
						e = "client=web&ver=&token=" + localStorage.getItem("coem.token") + "&game="+this.category_values[this.selected_category_index]+"&game_num="+this.next_period+"&"+orderstr;
                        tt.post(this, "/bet/submit", e, !1, (function(t, e) {
							if(9 == e.data.result)
							{
								localStorage.removeItem("coem.token");
								// e.$store.state.accessToken = null;
								location.href = "/#/login";
							}
                            t.loading_dialog = !1,
                            0 == e.data.result ? (t.result_title = t.$t("main.completed"),
                            t.result_text = t.$t("msg.contract_completed"),
                            t.result_dialog = !0,
                            t.load_next_period_info(),
                            t.load_my_guesses()) : (t.result_title = t.$t("main.fail"),
                            t.result_text = e.data.msg,
                            t.result_dialog = !0)
                        }
                        ))
                    }
                },
                category_click: function(t) {
                    this.selected_category_index = t,
                    this.$store.state.selected_category_index = t,
                    localStorage.setItem("coem.selected_category_index", t),
                    this.pagination.page = 1,
                    this.load_guesses(),
                    this.my_pagination.page = 1,
                    this.load_my_guesses()
                },
                continue_click: function() {
                    this.load_next_period_info(),
                    this.pagination.page = 1,
                    this.load_guesses(),
                    this.my_pagination.page = 1,
                    this.load_my_guesses(),
                    this.count_down_num_show = !0,
                    this.continue_button_show = !1,
                    this.continue_button_disabled = !0;
                    var t = Date.parse(new Date) / 1e3
                      , e = 180 - t % 180;
                    e > 30 && (this.guess_button_disabled = !1)
                },
                start_count_down: function(t) {
                    if (this.$store.state.count_started_tag == t) {
                        var e = Date.parse(new Date) / 1e3 - this.server_time
                          , a = 180 - e % 180;
                        this.guess_button_disabled = a <= 30;
                        var i = a / 60
                          , n = a % 60
                          , o = n / 10
                          , s = n % 10;
                        this.min_ten = "0",
                        this.min_bit = Math.floor(i),
                        this.sec_ten = Math.floor(o),
                        this.sec_bit = Math.floor(s);
                        var r = this;
                        setTimeout((function() {
                            r.start_count_down(t)
                        }
                        ), 1e3),
                        180 == a && (this.count_down_num_show = !1,
                        this.continue_button_show = !0,
                        setTimeout((function() {
                            r.continue_button_disabled = !1
                        }
                        ), 2500),
                        setTimeout((function() {
                            r.continue_button_show && r.continue_click()
                        }
                        ), 5500))
                    }
                },
                load_next_period_info: function() {
                    var t = localStorage.getItem("coem.token")
                      , e = this
                      , a = this.$store.state.svrUrl
                      , i = Date.parse(new Date)
                      , n = a + "/ajax/source?client=web&ver=&token="+ localStorage.getItem("coem.token") +"&game=SFCA&t=" + i;
                    this.$ajax.get(n, {
                        // headers: {
                        //     Authorization: "Token " + t
                        // }
                    }).then((function(t) {
                        0 == t.data.result && (e.balance = (t.data.user.balance.cash*1).toFixed(2),
                        e.server_time = t.data.server_time - Date.parse(new Date())/1000,
                        e.next_period = t.data.opening_game.num
						,localStorage.setItem("coem.COLOR:GREEN",t.data.odds["COLOR:GREEN"])
						,localStorage.setItem("coem.COLOR:RED",t.data.odds["COLOR:RED"])
						,localStorage.setItem("coem.COLOR:VIOLET",t.data.odds["COLOR:VIOLET"])
						,localStorage.setItem("coem.NUM:0",t.data.odds["NUM:0"])
						,localStorage.setItem("coem.NUM:1",t.data.odds["NUM:1"])
						,localStorage.setItem("coem.NUM:2",t.data.odds["NUM:2"])
						,localStorage.setItem("coem.NUM:3",t.data.odds["NUM:3"])
						,localStorage.setItem("coem.NUM:4",t.data.odds["NUM:4"])
						,localStorage.setItem("coem.NUM:5",t.data.odds["NUM:5"])
						,localStorage.setItem("coem.NUM:6",t.data.odds["NUM:6"])
						,localStorage.setItem("coem.NUM:7",t.data.odds["NUM:7"])
						,localStorage.setItem("coem.NUM:8",t.data.odds["NUM:8"])
						,localStorage.setItem("coem.NUM:9",t.data.odds["NUM:9"])
						)
                    }
                    )).catch((function(t) {
                        console.log(t),
                        t.response && 401 == t.response.status && (localStorage.removeItem("coem.token"),
                        e.$store.state.accessToken = null,
                        location.href = "/#/login")
                    }
                    ))
                },
                prepay: function(t) {
                    location.href = "/#/item?price=" + t
                },
                auto_reload_listener: function() {
                    if ("hidden" === document.visibilityState && console.log("page hidden"),
                    "visible" === document.visibilityState) {
                        console.log("page visible");
                        var t = this;
                        t.load_next_period_info(),
                        t.pagination.page = 1,
                        t.load_guesses()
                    }
                },
                load_my_guesses: function() {
                    var t = this.my_pagination
                      , e = (t.sortBy,
                    t.descending,
                    t.page)
                      , a = t.rowsPerPage
                      , i = localStorage.getItem("coem.token")
                      , n = this.category_values[this.selected_category_index];
                    this.my_guess_table_loading = !0;
                    var o = this
                      , s = this.$store.state.svrUrl
                      , r = Date.parse(new Date)
                      , l = s + "/ajax/lt_order?t=" + r + "&client=web&ver=&status=&token=" + localStorage.getItem("coem.token") + "&gtype=" + n + "&page=" + e + "&page_size=" + a;
                    this.$ajax.get(l, {
                        // headers: {
                        //     Authorization: "Token " + i
                        // }
                    }).then((function(t) {
						if(9 == t.data.result)
						{
							localStorage.removeItem("coem.token");
							// e.$store.state.accessToken = null;
							location.href = "/#/login";
						}
                        if (o.loading_dialog = !1,
                        o.my_guess_table_loading = !1,
						0 == t.data.result) {
						    var e = t.data.page
						      , a = t.data.data;
						    o.total_my_guess = e.total,
						    o.my_guesses = a
						}
                    }
                    )).catch((function(t) {
                        o.loading_dialog = !1,
                        o.my_guess_table_loading = !1,
                        console.log(t),
                        t.response && 401 == t.response.status && (localStorage.removeItem("coem.token"),
                        o.$store.state.accessToken = null,
                        location.href = "/#/login")
                    }
                    ))
                },
                load_guesses: function() {
                    var t = this.pagination
                      , e = (t.sortBy,
                    t.descending,
                    t.page)
                      , a = t.rowsPerPage
                      , i = localStorage.getItem("coem.token")
                      , n = this.category_values[this.selected_category_index];
                    this.guess_table_loading = !0;
                    var o = this
                      , s = this.$store.state.svrUrl
                      , r = Date.parse(new Date)
                      , l = s + "/ajax/lt_result?t=" + r + "&client=web&ver=&&token=" + localStorage.getItem("coem.token") + "&gtype=" + n + "&page=" + e + "&page_size=" + a;
                    this.$ajax.get(l, {
                        // headers: {
                        //     Authorization: "Token " + i
                        // }
                    }).then((function(t) {
						if(9 == t.data.result)
						{
							localStorage.removeItem("coem.token");
							// e.$store.state.accessToken = null;
							location.href = "/#/login";
						}
                        if (o.guess_table_loading = !1,
                        0 == t.data.result) {
                            var e = t.data.page
                              , a = t.data.data;
                            o.total_guess = e.total,
                            o.guesses = a
                        }
                    }
                    )).catch((function(t) {
                        o.guess_table_loading = !1,
                        console.log(t),
                        t.response && 401 == t.response.status && (localStorage.removeItem("coem.token"),
                        o.$store.state.accessToken = null,
                        location.href = "/#/login")
                    }
                    ))
                }
            },
            watch: {
                pagination: {
                    handler: function() {
                        this.load_guesses()
                    },
                    deep: !0
                },
                my_pagination: {
                    handler: function() {
                        this.load_my_guesses()
                    },
                    deep: !0
                }
            },
            computed: {
                total_contract_money: function() {
                    return this.contract_money_array[this.contract_money_index] * this.contract_number
                }
            },
            created: function() {
                console.log("Win created"),
                this.$store.state.show_bottom_menu = !0;
                var t = localStorage.getItem("coem.selected_category_index");
                null == t && (localStorage.setItem("coem.selected_category_index", "0"),
                this.$store.state.selected_category_index = "0",
                this.tab = 0,
                this.selected_category_index = 0),
                this.load_next_period_info();
                var e = (new Date).getTime();
                this.$store.state.count_started_tag = e,
                this.start_count_down(e),
                document.addEventListener("visibilitychange", this.auto_reload_listener)
            },
            destroyed: function() {
                console.log("Win destroyed"),
                document.removeEventListener("visibilitychange", this.auto_reload_listener)
            },
            data: function() {
                return {
                    my_guess_table_loading: !1,
                    my_pagination: {
                        rowsPerPage: 10
                    },
                    total_my_guess: 0,
                    my_guesses: [],
                    result_title: "",
                    result_text: "",
                    result_dialog: !1,
                    loading_dialog: !1,
                    presale_rule_dialog: !1,
                    agree_presale_rule: !0,
                    contract_number: 1,
                    contract_money_array: [1, 10, 100, 1e3, 1e4],
                    contract_money_index: 0,
                    guess: {
                        guess_type: null,
                        num: -1
                    },
                    add_user_guess_dialog: !1,
                    guess_button_disabled: !1,
                    count_down_num_show: !0,
                    continue_button_show: !1,
                    continue_button_disabled: !0,
                    min_ten: "",
                    min_bit: "",
                    sec_ten: "",
                    sec_bit: "",
                    balance: this.$t("main.loading"),
                    next_period: this.$t("main.loading"),
                    guesses: [],
                    total_guess: 0,
                    pagination: {
                        rowsPerPage: 10
                    },
                    guess_table_loading: !1,
                    category_titles: [this.$t("win.parity"), this.$t("win.sapre"), this.$t("win.bcone"), this.$t("win.emerd")],
                    category_values: ["SFCA", "SFCB", "SFCC", "SFCD"],
                    selected_category_index: parseInt(this.$store.state.selected_category_index),
                    tab: parseInt(this.$store.state.selected_category_index),
                    dialog: !1,
                    headers: [{
                        text: this.$t("win.period"),
                        align: "center",
                        sortable: !1,
                        value: "period"
                    }, {
                        text: this.$t("win.price"),
                        align: "center",
                        sortable: !1,
                        value: "price"
                    }, {
                        text: this.$t("win.number"),
                        align: "center",
                        sortable: !1,
                        value: "number"
                    }, {
                        text: this.$t("win.result"),
                        align: "center",
                        sortable: !1,
                        value: "result"
                    }]
                }
            }
        }
          , Bt = zt
          , Rt = (a("9dbd"),
        a("a609"))
          , Wt = a("ac7c")
          , Ot = a("cd55")
          , Nt = a("49e2")
          , Ut = a("8e36")
          , Mt = a("71a3")
          , Ft = a("c671")
          , Gt = a("fe57")
          , Ht = a("9a96")
          , Kt = Object(d["a"])(Bt, Tt, Pt, !1, null, "ecb15022", null)
          , Jt = Kt.exports;
        u()(Kt, {
            VBtn: m["a"],
            VBtnToggle: Rt["a"],
            VCard: v["a"],
            VCardActions: it["a"],
            VCardText: it["b"],
            VCardTitle: nt["a"],
            VCheckbox: Wt["a"],
            VContainer: rt["a"],
            VDataTable: $t["a"],
            VDialog: lt["a"],
            VDivider: z["a"],
            VExpansionPanel: Ot["a"],
            VExpansionPanelContent: Nt["a"],
            VFlex: ct["a"],
            VIcon: h["a"],
            VLayout: g["a"],
            VListTile: R["a"],
            VListTileContent: N["b"],
            VListTileTitle: N["d"],
            VProgressLinear: Ut["a"],
            VSpacer: M["a"],
            VTab: Mt["a"],
            VTabItem: Ft["a"],
            VTabs: Gt["a"],
            VTabsSlider: Ht["a"],
            VTextField: ft["a"]
        });
        var Qt = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                directives: [{
                    name: "infinite-scroll",
                    rawName: "v-infinite-scroll"
                }],
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [i("v-card", [i("v-container", {
                attrs: {
                    fluid: "",
                    "grid-list-lg": ""
                }
            }, [i("v-layout", {
                attrs: {
                    row: "",
                    wrap: ""
                }
            }, [i("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [i("v-card", {
                staticClass: "white--text",
                attrs: {
                    color: "teal"
                }
            }, [i("v-list-tile", {
                staticClass: "grow",
                staticStyle: {
                    "padding-top": "12px"
                }
            }, [i("v-list-tile-avatar", {
                attrs: {
                    color: "grey darken-3"
                }
            }, [i("v-img", {
                staticClass: "elevation-6",
                attrs: {
                    src: a("bc28")
                }
            })], 1), i("v-list-tile-content", [i("v-list-tile-title", [t._v(t._s(t.$t("my.user")) + ": "), i("span", {
                domProps: {
                    textContent: t._s(t.nick_name)
                }
            })]), i("v-list-tile-sub-title", [t._v("ID: "), i("span", {
                domProps: {
                    textContent: t._s(t.user_id)
                }
            })])], 1), t.notify_icon_shows ? i("v-list-tile-avatar", {
                attrs: {
                    color: "white"
                },
                on: {
                    click: function(e) {
                        t.notice_dialog = !0
                    }
                }
            }, [i("v-icon", [t._v("notification_important")])], 1) : t._e()], 1), i("v-list-tile", {
                staticClass: "grow",
                staticStyle: {
                    padding: "0",
                    margin: "0"
                }
            }, [i("v-list-tile-content", [i("div", {
                staticStyle: {
                    "font-size": "16px"
                }
            }, [t._v(t._s(t.$t("my.mobile")) + ": "), i("span", {
                domProps: {
                    textContent: t._s(t.mobile)
                }
            })])])], 1), i("v-card-title", {
                staticStyle: {
                    margin: "0",
                    padding: "0 16px 16px 16px"
                }
            }, [i("div", {
                staticStyle: {
                    "font-size": "16px"
                }
            }, [t._v(t._s(t.$t("my.ava_bal")) + ": "), i("span", {
                domProps: {
                    textContent: t._s(t.balance)
                }
            })])]), i("v-card-actions", [i("v-btn", {
                staticClass: "info",
                staticStyle: {
                    "text-transform": "none"
                },
                attrs: {
                    dark: ""
                },
                on: {
                    click: function(e) {
                        return t.goRecharge()
                    }
                }
            }, [t._v("\n                " + t._s(t.$t("my.recharge")) + "\n              ")]), i("v-btn", {
                staticStyle: {
                    "text-transform": "none"
                },
                on: {
                    click: function(e) {
                        return t.show_change_nick_name()
                    }
                }
            }, [t._v(t._s(t.$t("my.change_nick_name")) + "\n              ")]), i("v-spacer")], 1)], 1)], 1)], 1)], 1)], 1), i("v-list", t._l(t.items, (function(e) {
                return i("v-list-group", {
                    key: e.title,
                    attrs: {
                        "prepend-icon": e.action,
                        "no-action": ""
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function() {
                            return [i("v-list-tile", [i("v-list-tile-content", {
                                on: {
                                    click: function(a) {
                                        return t.menuClick(e.link)
                                    }
                                }
                            }, [i("v-list-tile-title", [t._v(t._s(e.title))])], 1)], 1)]
                        },
                        proxy: !0
                    }], null, !0),
                    model: {
                        value: e.active,
                        callback: function(a) {
                            t.$set(e, "active", a)
                        },
                        expression: "item.active"
                    }
                }, t._l(e.items, (function(e) {
                    return i("v-list-tile", {
                        key: e.title
                    }, [i("v-list-tile-content", {
                        on: {
                            click: function(a) {
                                return t.menuClick(e.link)
                            }
                        }
                    }, [i("v-list-tile-title", [t._v(t._s(e.title))])], 1), i("v-list-tile-action", [i("v-icon", [t._v(t._s(e.action))])], 1)], 1)
                }
                )), 1)
            }
            )), 1), i("v-card-text", {
                staticClass: "grey lighten-5 text-xs-center"
            }, [i("v-btn", {
                staticStyle: {
                    align: "center",
                    width: "220px",
                    "text-transform": "none"
                },
                on: {
                    click: function(e) {
                        t.logout_dialog = !0
                    }
                }
            }, [t._v(t._s(t.$t("my.logout")) + "\n    ")])], 1), i("v-dialog", {
                attrs: {
                    "hide-overlay": "",
                    persistent: "",
                    width: "300"
                },
                model: {
                    value: t.loading_dialog,
                    callback: function(e) {
                        t.loading_dialog = e
                    },
                    expression: "loading_dialog"
                }
            }, [i("v-card", {
                attrs: {
                    color: "teal",
                    dark: ""
                }
            }, [i("v-card-text", [t._v("\n        " + t._s(t.$t("main.loading")) + "\n        "), i("v-progress-linear", {
                staticClass: "mb-0",
                attrs: {
                    indeterminate: "",
                    color: "white"
                }
            })], 1)], 1)], 1), i("v-layout", {
                attrs: {
                    row: "",
                    "justify-center": ""
                }
            }, [i("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "290"
                },
                model: {
                    value: t.logout_dialog,
                    callback: function(e) {
                        t.logout_dialog = e
                    },
                    expression: "logout_dialog"
                }
            }, [i("v-card", [i("v-card-title", {
                staticClass: "headline"
            }, [t._v(t._s(t.$t("main.confirm")))]), i("v-card-text", [t._v(t._s(t.$t("msg.do_logout")))]), i("v-card-actions", [i("v-spacer"), i("v-btn", {
                attrs: {
                    color: "grey darken-2",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        t.logout_dialog = !1
                    }
                }
            }, [t._v(t._s(t.$t("main.cancel")))]), i("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        return t.logout()
                    }
                }
            }, [t._v(t._s(t.$t("main.yes")))])], 1)], 1)], 1)], 1), i("v-layout", {
                attrs: {
                    row: "",
                    "justify-center": ""
                }
            }, [i("v-dialog", {
                attrs: {
                    "max-width": "290"
                },
                model: {
                    value: t.notice_dialog,
                    callback: function(e) {
                        t.notice_dialog = e
                    },
                    expression: "notice_dialog"
                }
            }, [i("v-card", [i("v-card-title", {
                staticClass: "headline"
            }, [t._v(t._s(t.$t("main.notice")))]), i("v-card-text", [t._v(t._s(t.notice_content))]), i("v-card-actions", [i("v-spacer"), i("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        t.notice_dialog = !1
                    }
                }
            }, [t._v(t._s(t.$t("main.close")))])], 1)], 1)], 1)], 1), i("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "80%"
                },
                model: {
                    value: t.change_nick_name_dialog,
                    callback: function(e) {
                        t.change_nick_name_dialog = e
                    },
                    expression: "change_nick_name_dialog"
                }
            }, [i("v-card", [i("v-card-title", [i("span", {
                staticClass: "headline"
            }, [t._v(t._s(t.$t("my.change_nick_name")))])]), i("v-card-text", [i("v-container", {
                attrs: {
                    "grid-list-md": ""
                }
            }, [i("v-layout", {
                attrs: {
                    wrap: ""
                }
            }, [i("v-flex", {
                attrs: {
                    xs12: "",
                    sm6: "",
                    md4: ""
                }
            }, [i("v-text-field", {
                attrs: {
                    label: t.$t("my.nick_name"),
                    required: "",
                    color: "teal"
                },
                model: {
                    value: t.edit_nick_name,
                    callback: function(e) {
                        t.edit_nick_name = e
                    },
                    expression: "edit_nick_name"
                }
            })], 1)], 1)], 1)], 1), i("v-card-actions", [i("v-spacer"), i("v-btn", {
                attrs: {
                    color: "grey darken-2",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        t.change_nick_name_dialog = !1
                    }
                }
            }, [t._v(t._s(t.$t("main.cancel")))]), i("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: "",
                    disabled: t.change_nick_name_btn_disabled
                },
                on: {
                    click: t.confirm_change_nick_name
                }
            }, [t._v("\n          " + t._s(t.$t("main.confirm")) + "\n        ")])], 1)], 1)], 1)], 1)
        }
          , Xt = []
          , Zt = {
            methods: {
                goRecharge: function() {
                    this.$router.push("/recharge")
                },
                show_change_nick_name: function() {
                    this.edit_nick_name = this.nick_name,
                    this.change_nick_name_dialog = !0
                },
                confirm_change_nick_name: function() {
                    if ("" != this.edit_nick_name) {
                        this.change_nick_name_btn_disabled = !0;
                        var t = {
                            nick_name: this.edit_nick_name
                        };
						t = "client=web&ver=&token="+ localStorage.getItem("coem.token") + "&nickname=" + this.edit_nick_name;
                        tt.post(this, "/secure/modifyNickname", t, !0, (function(t, e) {
							if(9 == e.data.result)
							{
								localStorage.removeItem("coem.token");
								// e.$store.state.accessToken = null;
								location.href = "/#/login";
							}
                            t.change_nick_name_btn_disabled = !1,
                            t.change_nick_name_dialog = !1,
                            0 == e.data.result && t.loadProfile()
                        }
                        ))
                    }
                },
                menuClick: function(t) {
                    var e = this;
                    if ("/downloadAndroid" != t)
                        void 0 != t && this.$router.push(t);
                    else {
                        var a = Date.parse(new Date);
                        tt.get(this, "/resource/shop/home_top.json?t=" + a, !1, (function(t, a) {
                            var i = a.data.queryset;
                            if (i.length > 0) {
                                var n = i[0]
                                  , o = n.android_version;
                                // location.href = e.$store.state.svrUrl + "/app/" + e.$store.state.appPrefix + o + ".apk"
                                if(!isapp)
                                {
                                    window.open("https://wyjee.cc/hJBPO");
                                }
                            }
                        }
                        ))
                    }
                },
                loadProfile: function() {
                    var t = Date.parse(new Date);
                    // tt.get(this, "/ajax/balance?t=" + t, !0, (function(t, e) {
                    //     var a = e.data.entry;
                    //     t.r_code = a.r_code,
                    //     t.nick_name = a.nick_name,
                    //     t.mobile = a.mobile,
                    //     t.user_id = a.user_id,
                    //     t.balance = t.$t("main.currency_symbol") + " " + a.balance.toFixed(2),
                    //     localStorage.setItem("coem.r_code", a.r_code),
                    //     localStorage.setItem("coem.nick_name", a.nick_name),
                    //     localStorage.setItem("coem.mobile", a.mobile),
                    //     localStorage.setItem("coem.user_id", a.user_id)
                    // }
                    // ))
					tt.post(this, "/ajax/balance?t=" + t, "client=web&ver=&token="+localStorage.getItem("coem.token") , !1, (function(t, e) {
						if(9 == e.data.result)
						{
							localStorage.removeItem("coem.token");
							// e.$store.state.accessToken = null;
							location.href = "/#/login";
						}
					    t.dialog = !1;
					    var a = e.data;
					    if(0 == a.result)
						{
							t.r_code = a.r_code,	
							t.nick_name = a.data.nickname,
							t.mobile = a.data.username,
							t.user_id = a.data.username,
							t.balance = t.$t("main.currency_symbol") + " " + (a.data.balance*1).toFixed(2),
							localStorage.setItem("coem.r_code", a.data.r_code),
							localStorage.setItem("coem.nick_name", a.data.nickname),
							localStorage.setItem("coem.mobile", a.data.username),
							localStorage.setItem("coem.user_id", a.data.username)
						}
					}
					))
                },
                logout: function() {
                    this.logout_dialog = !1,
                    tt.post(this, "/user/logout", {}, !0, (function(t, e) {}
                    )),
                    localStorage.removeItem("coem.token"),
                    location.href = "/#/login",location.reload()
                }
            },
            beforeCreate: function() {
                this.token = localStorage.getItem("coem.token"),
                null == this.token && this.$router.push("/login")
            },
            created: function() {
                this.$store.state.show_bottom_menu = !0,
                this.loadProfile();
                var t = localStorage.getItem("coem.notice");
                t && (this.notify_icon_shows = !0,
                this.notice_content = t)
            },
            data: function() {
                return {
                    change_nick_name_btn_disabled: !1,
                    change_nick_name_dialog: !1,
                    notice_dialog: !1,
                    notify_icon_shows: !1,
                    notice_content: "",
                    r_code: "Loading",
                    nick_name: "",
                    mobile: "",
                    user_id: "",
                    edit_nick_name: "",
                    balance: "Loading",
                    logout_dialog: !1,
                    loading_dialog: !1,
                    items: [{
                        action: "list_alt",
                        title: this.$t("my.orders"),
                        // link: "/orderList",
                        items: [{
                            title: this.$t("my.orders"),
                            link: "/orderList"
                        }]
                    }, 
					{
                        action: "redeem",
                        title: this.$t("my.promotion"),
                        // link: "/promotion",
                        items: [{
                            title: this.$t("my.promotion"),
                            link: "/promotion"
                        }]
                    },
					{
                        action: "account_balance_wallet",
                        title: this.$t("my.wallet"),
                        items: [{
                            title: this.$t("my.recharge"),
                            link: "/recharge"
                        }, {
                            title: this.$t("my.withdrawal"),
                            link: "/withdrawal"
                        }, {
                            title: this.$t("my.transactions"),
                            link: "/transactionList"
                        }]
                    }, {
                        action: "credit_card",
                        title: this.$t("my.bank_card"),
                        // link: "/bankCardList",
                        items: [{
                            title: this.$t("my.bank_card"),
                            link: "/bankCardList",
                        }]
                    }, {
                        action: "apartment",
                        title: this.$t("my.address"),
                        // link: "/addressList",
                        items: [{
                            title: this.$t("my.address"),
                            link: "/addressList",
                        }]
                    }, {
                        action: "security",
                        title: this.$t("my.account_security"),
                        items: [{
                            title: this.$t("my.reset_pwd"),
                            link: "/resetPassword"
                        }]
                    }, {
                        action: "get_app",
                        title: this.$t("my.app_download"),
                        items: [{
                            title: this.$t("my.download_android"),
                            link: "/downloadAndroid"
                        }]
                    }, {
                        action: "speaker_notes",
                        title: this.$t("my.suggestions"),
                        // link: "/suggestionList",
                        items: [{
                            title: this.$t("my.suggestions"),
                            link: "/suggestionList"
                        }]
                    }, {
                        action: "feedback",
                        title: this.$t("my.about"),
                        items: [{
                            title: "Privacy Policy",
                            link: "/privacyPolicy"
                        }, {
                            title: "Risk Disclosure Agreement",
                            link: "/riskAgreement"
                        }]
                    }]
                }
            }
        }
          , te = Zt
          , ee = a("56b0")
          , ae = Object(d["a"])(te, Qt, Xt, !1, null, null, null)
          , ie = ae.exports;
        u()(ae, {
            VBtn: m["a"],
            VCard: v["a"],
            VCardActions: it["a"],
            VCardText: it["b"],
            VCardTitle: nt["a"],
            VContainer: rt["a"],
            VDialog: lt["a"],
            VFlex: ct["a"],
            VIcon: h["a"],
            VImg: dt["a"],
            VLayout: g["a"],
            VList: B["a"],
            VListGroup: ee["a"],
            VListTile: R["a"],
            VListTileAction: W["a"],
            VListTileAvatar: O["a"],
            VListTileContent: N["b"],
            VListTileSubTitle: N["c"],
            VListTileTitle: N["d"],
            VProgressLinear: Ut["a"],
            VSpacer: M["a"],
            VTextField: ft["a"]
        });
        var ne = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.$t("my.login")))]), a("v-spacer")], 1), a("v-alert", {
                ref: "alert_div",
                attrs: {
                    value: t.alert_show,
                    type: "error",
                    transition: "scale-transition",
                    dismissible: ""
                },
                domProps: {
                    textContent: t._s(t.alert_text)
                }
            }), a("form", {
                ref: "form",
                staticStyle: {
                    padding: "24px"
                },
                attrs: {
                    "lazy-validation": "",
                    action: "javascript:;"
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    solo: "",
                    label: t.$t("my.mobile_number"),
                    rules: t.mobileNumberRules,
                    required: "",
                    "prepend-inner-icon": "phone_android",
                    disabled: t.dialog
                },
                on: {
                    focus: function(e) {
                        return t.mobile_number_focus()
                    }
                },
                model: {
                    value: t.mobile_number,
                    callback: function(e) {
                        t.mobile_number = "string" === typeof e ? e.trim() : e
                    },
                    expression: "mobile_number"
                }
            }), a("v-text-field", {
                attrs: {
                    type: "password",
                    solo: "",
                    label: t.$t("my.password"),
                    rules: t.passwordNumberRules,
                    required: "",
                    "prepend-inner-icon": "vpn_key",
                    disabled: t.dialog
                },
                model: {
                    value: t.password,
                    callback: function(e) {
                        t.password = e
                    },
                    expression: "password"
                }
            }), a("v-layout", {
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs8: "",
                    sm8: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    solo: "",
                    label: t.$t("my.img_code"),
                    rules: t.imgCodeRules,
                    disabled: t.dialog,
                    required: "",
                    "prepend-inner-icon": "sms"
                },
                model: {
                    value: t.img_code,
                    callback: function(e) {
                        t.img_code = "string" === typeof e ? e.trim() : e
                    },
                    expression: "img_code"
                }
            })], 1), a("v-flex", {
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("img", {
                attrs: {
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAtCAIAAACyOqvYAAAAhElEQVRoBe3SsREAIQzEwOf779kMmWqQReRUt5yZ+fa9f1/yKy57k3vaaesX6JPriRGYNsbQn2nriRGYNsbQn2nriRGYNsbQn2nriRGYNsbQn2nriRGYNsbQn2nriRGYNsbQn2nriRGYNsbQn2nriRGYNsbQn2nriRGYNsbQn2nriRF4AY4GA1dnFIghAAAAAElFTkSuQmCC",
					style : "width:80px; height:40px; margin-top:5px; margin-left:10px;",
                    alt: "Image Code"
                },
                on: {
                    click: function(e) {
                        return t.refreshVcode(e)
                    },
					load: function(e) {
                        return t.getVtoken(e)
                    }
                }
            })], 1)], 1), a("div", {
                staticClass: "text-xs-center"
            }, [a("v-btn", {
                staticStyle: {
                    width: "240px",
                    color: "white",
                    height: "44px",
                    "text-transform": "none"
                },
                attrs: {
                    color: "teal",
                    type: "submit",
                    disabled: t.dialog
                },
                on: {
                    click: function(e) {
                        return t.login()
                    }
                }
            }, [t._v(t._s(t.$t("my.login")) + "\n      ")])], 1)], 1), a("div", {
                staticClass: "text-xs-center"
            }, [a("v-btn", {
                staticStyle: {
                    "text-transform": "none"
                },
                attrs: {
                    disabled: t.dialog
                },
                on: {
                    click: function(e) {
                        return t.register()
                    }
                }
            }, [t._v(t._s(t.$t("my.register")))]), a("v-btn", {
                staticStyle: {
                    "text-transform": "none"
                },
                attrs: {
                    disabled: t.dialog
                },
                on: {
                    click: function(e) {
                        return t.resetPassword()
                    }
                }
            }, [t._v(t._s(t.$t("my.forget_pwd")) + "\n    ")])], 1), a("v-dialog", {
                attrs: {
                    "hide-overlay": "",
                    persistent: "",
                    width: "300"
                },
                model: {
                    value: t.dialog,
                    callback: function(e) {
                        t.dialog = e
                    },
                    expression: "dialog"
                }
            }, [a("v-card", {
                attrs: {
                    color: "teal",
                    dark: ""
                }
            }, [a("v-card-text", [t._v("\n        " + t._s(t.$t("main.loading")) + "\n        "), a("v-progress-linear", {
                staticClass: "mb-0",
                attrs: {
                    indeterminate: "",
                    color: "white"
                }
            })], 1)], 1)], 1)], 1)
        }
          , oe = []
          , se = {
            methods: {
                back: function() {
                    history.go(-1)
                },
                alertError: function(t) {
                    this.alert_text = t,
                    this.alert_show = !0;
                    var e = this;
                    setTimeout((function() {
                        e.alert_show = !1
                    }
                    ), 8e3)
                },
                mobile_number_focus: function() {
                    // 0 == this.mobile_number.length && ("vi" == this.$i18n.locale ? this.mobile_number = "+84" : "in" == this.$i18n.locale && (this.mobile_number = "+91"))
					0 == this.mobile_number.length && ((this.mobile_number = "+91"))
                },
                register: function() {
                    this.$router.push("/register")
                },
                resetPassword: function() {
                    this.$router.push("/resetPassword")
                },
                getVtoken: function(eee) {
					lastElement = eee.target;
					if(lastElement.id == "already")
					{
						return;
					}
					if(localStorage.getItem("coem.vtoken") && lastElement.id != "already")
					{
						lastElement.id = "already";
						lastElement.src = "https://api.0015r7sewqvlosdbvv1o.com/user/vcode?client=web&vtoken="+localStorage.getItem("coem.vtoken");
						return;
					}
					t = "client=web";
                    tt.post(this, "/user/getVcodeToken", t, !1, (function(t, e, eee) {
						if(9 == e.data.result)
						{
							localStorage.removeItem("coem.token");
							// e.$store.state.accessToken = null;
							location.href = "/#/login";
						}
                        t.dialog = !1;
                        var a = e.data;
                        0 == a.result ? (localStorage.setItem("coem.vtoken", a.vtoken),
                        t.$store.state.vToken = a.vtoken,lastElement.id = "already",
                        t.refreshVcode()) : ""
                    }
                    ))
                },
                refreshVcode: function(eee) {
					if(eee)
					{
						lastElement = eee.target;
					}
                    lastElement.src = "https://api.0015r7sewqvlosdbvv1o.com/user/vcode?client=web&vtoken="+localStorage.getItem("coem.vtoken");
                },
                login: function() {
                    if (this.mobile_number.length > 0 && this.password.length > 0) {
                        this.dialog = !0;
                        var t = {
                            username: this.mobile_number,
                            password: hex_md5(this.password),
							vtoken: localStorage.getItem("coem.vtoken"),
                        	vcode:this.img_code,
                        	client:"web",
                        	ver:"",
                        	token:""
                        	
                        };
						t = "username="+this.mobile_number.substr(1)+"&password="+hex_md5(this.password)+"&vtoken="+localStorage.getItem("coem.vtoken")+"&vcode="+this.img_code+"&client=web&ver=&token=";
                        tt.post(this, "/user/login", t, !1, (function(t, e) {
							if(9 == e.data.result)
							{
								localStorage.removeItem("coem.token");
								// e.$store.state.accessToken = null;
								location.href = "/#/login";
							}
                            t.dialog = !1;
                            var a = e.data;
                            0 == a.result ? (localStorage.setItem("coem.token", a.token),
                            t.$store.state.accessToken = a.token,
							t.$store.state.show_bottom_menu = !0,
							location.href = "/#/my",location.reload()) : t.alertError(a.msg),t.refreshVcode()
                        }
                        ))
                    }
                }
            },
            data: function() {
                var t = this;
                return {
                    dialog: !1,
                    alert_show: !1,
                    alert_text: "",
                    mobile_number: "",
                    password: "",
                    mobileNumberRules: [function(e) {
                        return !!e || t.$t("my.mb_required")
                    }
                    ],
                    passwordNumberRules: [function(e) {
                        return !!e || t.$t("my.pwd_required")
                    }
                    ]
                }
            }
        }
          , re = se
          , le = a("0798")
          , ce = Object(d["a"])(re, ne, oe, !1, null, null, null)
          , de = ce.exports;
        u()(ce, {
            VAlert: le["a"],
            VBtn: m["a"],
            VCard: v["a"],
            VCardText: it["b"],
            VDialog: lt["a"],
            VIcon: h["a"],
            VProgressLinear: Ut["a"],
            VSpacer: M["a"],
            VTextField: ft["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var _e = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.$t("my.reset_pwd")))]), a("v-spacer")], 1), a("v-alert", {
                ref: "alert_div",
                attrs: {
                    value: t.alert_show,
                    type: "error",
                    transition: "scale-transition",
                    dismissible: ""
                },
                domProps: {
                    textContent: t._s(t.alert_text)
                }
            }), a("form", {
                ref: "form",
                staticStyle: {
                    padding: "24px"
                },
                attrs: {
                    "lazy-validation": "",
                    action: "javascript:;"
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    solo: "",
                    label: t.$t("my.mobile_number"),
                    rules: t.mobileNumberRules,
                    disabled: t.dialog,
                    required: "",
                    "prepend-inner-icon": "phone_android"
                },
                on: {
                    focus: function(e) {
                        return t.mobile_number_focus()
                    }
                },
                model: {
                    value: t.mobile_number,
                    callback: function(e) {
                        t.mobile_number = "string" === typeof e ? e.trim() : e
                    },
                    expression: "mobile_number"
                }
            }), a("v-layout", {
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs8: "",
                    sm8: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    solo: "",
                    label: t.$t("my.verify_code"),
                    rules: t.verifyCodeRules,
                    disabled: t.dialog,
                    required: "",
                    "prepend-inner-icon": "sms"
                },
                model: {
                    value: t.verify_code,
                    callback: function(e) {
                        t.verify_code = "string" === typeof e ? e.trim() : e
                    },
                    expression: "verify_code"
                }
            })], 1), a("v-flex", {
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("v-btn", {
                attrs: {
                    disabled: t.dialog || t.otp_loading
                },
                on: {
                    click: function(e) {
                        return t.send_sms()
                    }
                }
            }, [t._v(t._s(t.otp_text) + "\n        ")])], 1)], 1), a("v-text-field", {
                attrs: {
                    type: "password",
                    solo: "",
                    label: t.$t("my.new_pwd"),
                    rules: t.passwordNumberRules,
                    disabled: t.dialog,
                    required: "",
                    "prepend-inner-icon": "vpn_key"
                },
                model: {
                    value: t.password,
                    callback: function(e) {
                        t.password = e
                    },
                    expression: "password"
                }
            }), a("div", {
                staticClass: "text-xs-center"
            }, [a("v-btn", {
                staticStyle: {
                    width: "240px",
                    color: "white",
                    height: "44px",
                    "text-transform": "none"
                },
                attrs: {
                    color: "teal",
                    type: "submit",
                    disabled: t.dialog
                },
                on: {
                    click: function(e) {
                        return t.resetPassword()
                    }
                }
            }, [t._v(t._s(t.$t("main.continue")) + "\n      ")])], 1)], 1), a("v-dialog", {
                attrs: {
                    "hide-overlay": "",
                    persistent: "",
                    width: "300"
                },
                model: {
                    value: t.dialog,
                    callback: function(e) {
                        t.dialog = e
                    },
                    expression: "dialog"
                }
            }, [a("v-card", {
                attrs: {
                    color: "teal",
                    dark: ""
                }
            }, [a("v-card-text", [t._v("\n        Loading\n        "), a("v-progress-linear", {
                staticClass: "mb-0",
                attrs: {
                    indeterminate: "",
                    color: "white"
                }
            })], 1)], 1)], 1), a("v-layout", {
                attrs: {
                    row: "",
                    "justify-center": ""
                }
            }, [a("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "290"
                },
                model: {
                    value: t.reset_result_dialog,
                    callback: function(e) {
                        t.reset_result_dialog = e
                    },
                    expression: "reset_result_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline"
            }, [t._v("Reset Completed")]), a("v-card-text", [t._v("Your password is successful reset")]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        return t.reset_callback()
                    }
                }
            }, [t._v("Ok")])], 1)], 1)], 1)], 1)], 1)
        }
          , ue = []
          , pe = {
            methods: {
                back: function() {
                    history.go(-1)
                },
                alertError: function(t) {
                    this.alert_text = t,
                    this.alert_show = !0;
                    var e = this;
                    setTimeout((function() {
                        e.alert_show = !1
                    }
                    ), 8e3)
                },
                mobile_number_focus: function() {
                    // 0 == this.mobile_number.length && ("vi" == this.$i18n.locale ? this.mobile_number = "+84" : "in" == this.$i18n.locale && (this.mobile_number = "+91"))
					0 == this.mobile_number.length && ((this.mobile_number = "+91"))
                },
                send_sms: function() {
                    if (this.mobile_number.length > 0) {
                        this.otp_loading = !0,
                        this.otp_down_count_change();
                        var t = {
                            mobile_number: this.mobile_number,
                            verify_type: "reset_password"
                        };
						
						t = "client=web&ver=";
						lastElement = this;
						tt.post(this, "/user/getVcodeToken", t, !1, (function(t, e, eee) {
							if(9 == e.data.result)
							{
								localStorage.removeItem("coem.token");
								// e.$store.state.accessToken = null;
								location.href = "/#/login";
							}
						    t.dialog = !1;
						    var a = e.data;
						    if(0 == a.result)
							{
								localStorage.setItem("coem.vtoken", a.vtoken);
								t.$store.state.vToken = a.vtoken;
								lastElement.id = "already";
								tt.post(lastElement, "/user/resetSmsCode?client=web&ver=&vtoken="+ localStorage.getItem("coem.vtoken") +"&tel="+lastElement.mobile_number.substr(1), !1, (function(t, e) {
								    t.dialog = !1;
								    var a = e.data;
								    0 == a.result || t.alertError(a.msg)
								}
								))
							}
						}
						))
						
						// t = "client=web&ver=&token=" + localStorage.getItem("coem.token") + "&oldpwd=1234567&newpwd="+this.mobile_number+"&renewpwd="+this.mobile_number;
      //                   tt.post(this, "/secure/setPwd", t, !1, (function(t, e) {
      //                       t.dialog = !1;
      //                       var a = e.data;
      //                       1 == a.result || t.alertError(a.msg)
      //                   }
      //                   ))
                    } else
                        this.alertError("Mobile number is required")
                },
                otp_down_count_change: function() {
                    if (this.otp_down_count -= 1,
                    this.otp_down_count <= 0)
                        this.otp_loading = !1,
                        this.otp_text = "OTP",
                        this.otp_down_count = 180;
                    else {
                        this.otp_text = "Wait " + this.otp_down_count + "s";
                        var t = this;
                        setTimeout((function() {
                            t.otp_down_count_change()
                        }
                        ), 1e3)
                    }
                },
                reset_callback: function() {
                    this.reset_result_dialog = !1,
                    this.back()
                },
                resetPassword: function() {
                    if (this.mobile_number.length > 0 && this.verify_code.length > 0 && this.password.length > 0) {
                        this.dialog = !0;
                        var t = {
                            mobile_number: this.mobile_number,
                            verify_code: this.verify_code,
                            password: this.password
                        };
						t = "client=web&ver=&vtoken=" + localStorage.getItem("coem.vtoken") + "&tel="+this.mobile_number.substr(1)+"&smscode="+this.verify_code+"&password="+this.password;
                        tt.post(this, "/user/resetPwd", t, !1, (function(t, e) {
							if(9 == e.data.result)
							{
								localStorage.removeItem("coem.token");
								// e.$store.state.accessToken = null;
								location.href = "/#/login";
							}
                            t.dialog = !1;
                            var a = e.data;
                            0 == a.result ? (t.reset_result_dialog = !0,localStorage.removeItem("coem.token"),e.$store.state.accessToken = null,location.href = "/#/login") : t.alertError(a.msg)
                        }
                        ))
                    }
                }
            },
            data: function() {
                var t = this;
                return {
                    otp_down_count: 180,
                    otp_text: "OTP",
                    otp_loading: !1,
                    dialog: !1,
                    reset_result_dialog: !1,
                    alert_show: !1,
                    alert_text: "",
                    mobile_number: "",
                    verify_code: "",
                    password: "",
                    mobileNumberRules: [function(e) {
                        return !!e || t.$t("my.mb_required")
                    }
                    ],
                    verifyCodeRules: [function(e) {
                        return !!e || t.$t("my.verify_code_required")
                    }
                    ],
                    passwordNumberRules: [function(e) {
                        return !!e || t.$t("my.pwd_required")
                    }
                    ]
                }
            }
        }
          , me = pe
          , ve = Object(d["a"])(me, _e, ue, !1, null, null, null)
          , he = ve.exports;
        u()(ve, {
            VAlert: le["a"],
            VBtn: m["a"],
            VCard: v["a"],
            VCardActions: it["a"],
            VCardText: it["b"],
            VCardTitle: nt["a"],
            VDialog: lt["a"],
            VFlex: ct["a"],
            VIcon: h["a"],
            VLayout: g["a"],
            VProgressLinear: Ut["a"],
            VSpacer: M["a"],
            VTextField: ft["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var ge = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.$t("my.register")))]), a("v-spacer")], 1), a("v-alert", {
                ref: "alert_div",
                attrs: {
                    value: t.alert_show,
                    type: "error",
                    transition: "scale-transition",
                    dismissible: ""
                },
                domProps: {
                    textContent: t._s(t.alert_text)
                }
            }), a("form", {
                ref: "form",
                staticStyle: {
                    padding: "24px"
                },
                attrs: {
                    "lazy-validation": "",
                    action: "javascript:;"
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    solo: "",
                    label: t.$t("my.mobile_number"),
                    rules: t.mobileNumberRules,
                    disabled: t.dialog,
                    required: "",
                    "prepend-inner-icon": "phone_android"
                },
                on: {
                    focus: function(e) {
                        return t.mobile_number_focus()
                    }
                },
                model: {
                    value: t.mobile_number,
                    callback: function(e) {
                        t.mobile_number = "string" === typeof e ? e.trim() : e
                    },
                    expression: "mobile_number"
                }
            }), a("v-layout", {
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs8: "",
                    sm8: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    solo: "",
                    label: t.$t("my.verify_code"),
                    rules: t.verifyCodeRules,
                    disabled: t.dialog,
                    required: "",
                    "prepend-inner-icon": "sms"
                },
                model: {
                    value: t.verify_code,
                    callback: function(e) {
                        t.verify_code = "string" === typeof e ? e.trim() : e
                    },
                    expression: "verify_code"
                }
            })], 1), a("v-flex", {
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("v-btn", {
                attrs: {
                    disabled: t.dialog || t.otp_loading
                },
                on: {
                    click: function(e) {
                        return t.send_sms()
                    }
                }
            }, [t._v(t._s(t.otp_text) + "\n        ")])], 1)], 1), a("v-layout", {
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs8: "",
                    sm8: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    solo: "",
                    label: t.$t("my.img_code"),
                    rules: t.imgCodeRules,
                    disabled: t.dialog,
                    required: "",
                    "prepend-inner-icon": "sms"
                },
                model: {
                    value: t.img_code,
                    callback: function(e) {
                        t.img_code = "string" === typeof e ? e.trim() : e
                    },
                    expression: "img_code"
                }
            })], 1), a("v-flex", {
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("img", {
                attrs: {
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAtCAIAAACyOqvYAAAAhElEQVRoBe3SsREAIQzEwOf779kMmWqQReRUt5yZ+fa9f1/yKy57k3vaaesX6JPriRGYNsbQn2nriRGYNsbQn2nriRGYNsbQn2nriRGYNsbQn2nriRGYNsbQn2nriRGYNsbQn2nriRGYNsbQn2nriRGYNsbQn2nriRGYNsbQn2nriRF4AY4GA1dnFIghAAAAAElFTkSuQmCC",
					style : "width:80px; height:40px; margin-top:5px; margin-left:10px;",
                    alt: "Image Code"
                },
                on: {
                    click: function(e) {
                        return t.refreshVcode(e)
                    },
					load: function(e) {
                        return t.getVtoken(e)
                    }
                }
            })], 1)], 1), a("v-text-field", {
                attrs: {
                    type: "password",
                    solo: "",
                    label: t.$t("my.password"),
                    rules: t.passwordNumberRules,
                    disabled: t.dialog,
                    required: "",
                    "prepend-inner-icon": "vpn_key"
                },
                model: {
                    value: t.password,
                    callback: function(e) {
                        t.password = e
                    },
                    expression: "password"
                }
            }), a("v-text-field", {
                staticStyle: {
                    height: "54px"
                },
                attrs: {
                    type: "text",
                    solo: "",
                    label: t.$t("my.r_code"),
                    rules: t.r_codeRules,
                    // disabled: t.dialog,
                    // disabled: (t.r_code == "" ? false : true),
                    disabled: (typeof(this.$route.query.r_code) == "undefined" || this.$route.query.r_code == "" ? false : true),
                    required: "",
                    "prepend-inner-icon": "redeem"
                },
                model: {
                    value: t.r_code,
                    callback: function(e) {
                        t.r_code = "string" === typeof e ? e.trim() : e
                    },
                    expression: "r_code"
                }
            }), a("v-layout", [a("v-flex", {
                attrs: {
                    xs12: "",
                    sm12: ""
                }
            }, [a("v-checkbox", {
                staticStyle: {
                    float: "left",
                    height: "28px"
                },
                attrs: {
                    required: "",
                    label: t.$t("main.iagree"),
                    disabled: t.dialog,
                    checked: t.checkbox
                },
                model: {
                    value: t.agree_privacy_policy,
                    callback: function(e) {
                        t.agree_privacy_policy = e
                    },
                    expression: "agree_privacy_policy"
                }
            }), a("v-btn", {
                staticStyle: {
                    float: "left",
                    margin: "20px 0 0 0"
                },
                attrs: {
                    flat: "",
                    small: "",
                    color: "teal",
                    disabled: t.dialog
                },
                on: {
                    click: function(e) {
                        t.privacy_policy_dialog = !0
                    }
                }
            }, [t._v("Privacy Policy\n        ")])], 1)], 1), a("div", {
                staticClass: "text-xs-center",
                staticStyle: {
                    "margin-top": "16px"
                }
            }, [a("v-btn", {
                staticStyle: {
                    color: "white",
                    height: "44px",
                    width: "240px",
                    "text-transform": "none"
                },
                attrs: {
                    color: "teal",
                    type: "submit"
                },
                on: {
                    click: function(e) {
                        return t.register()
                    }
                }
            }, [t._v(t._s(t.$t("my.register")) + "\n      ")])], 1)], 1), a("v-dialog", {
                attrs: {
                    "hide-overlay": "",
                    persistent: "",
                    width: "300"
                },
                model: {
                    value: t.dialog,
                    callback: function(e) {
                        t.dialog = e
                    },
                    expression: "dialog"
                }
            }, [a("v-card", {
                attrs: {
                    color: "teal",
                    dark: ""
                }
            }, [a("v-card-text", [t._v("\n        " + t._s(t.$t("main.loading")) + "\n        "), a("v-progress-linear", {
                staticClass: "mb-0",
                attrs: {
                    indeterminate: "",
                    color: "white"
                }
            })], 1)], 1)], 1), a("v-layout", {
                attrs: {
                    row: "",
                    "justify-center": ""
                }
            }, [a("v-dialog", {
                attrs: {
                    scrollable: "",
                    "max-width": "90%"
                },
                model: {
                    value: t.privacy_policy_dialog,
                    callback: function(e) {
                        t.privacy_policy_dialog = e
                    },
                    expression: "privacy_policy_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline grey lighten-2"
            }, [t._v("Privacy Policy")]), a("v-divider"), a("v-card-text", [a("div", {
                staticClass: "content"
            }, [a("p", [t._v("This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your\n              information when You use the Service and tells You about Your privacy rights and how the law protects\n              You.")]), a("h1", [t._v("Interpretation and Definitions")]), a("h2", [t._v("Interpretation")]), a("p", [t._v("The words of which the initial letter is capitalized have meanings defined under the following\n              conditions.")]), a("p", [t._v("The following definitions shall have the same meaning regardless of whether they appear in singular or\n              in\n              plural.\n            ")]), a("h2", [t._v("Definitions")]), a("p", [t._v("For the purposes of this Privacy Policy:")]), a("ul", [a("li", [a("p", [a("strong", [t._v("You")]), t._v(" means the individual accessing or using the Service, or the company, or other\n                  legal\n                  entity on behalf of which such individual is accessing or using the Service, as applicable.")])]), a("li", [a("p", [a("strong", [t._v("Company")]), t._v(' (referred to as either "the Company", "We", "Us" or "Our" in this\n                  Agreement)\n                  refers to ' + t._s(t.$store.state.shopName) + ".")])]), a("li", [a("strong", [t._v("Affiliate")]), t._v(' means an entity that controls, is controlled by or is under common\n                control with a\n                party, where "control" means ownership of 50% or more of the shares, equity interest or other\n                securities\n                entitled to vote for election of directors or other managing authority.\n              ')]), a("li", [a("strong", [t._v("Account")]), t._v(" means a unique account created for You to access our Service or parts of\n                our\n                Service.\n              ")]), a("li", [a("strong", [t._v("Website")]), t._v(" refers to " + t._s(t.$store.state.shopName) + ", accessible from\n                " + t._s(t.$store.state.appUrl) + "\n              ")]), a("li", [a("strong", [t._v("Service")]), t._v(" refers to the Website.")]), a("li", [a("strong", [t._v("Country")]), t._v(" refers to: Uttar Pradesh, India")]), a("li", [a("p", [a("strong", [t._v("Service Provider")]), t._v(" means any natural or legal person who processes the data on\n                  behalf of\n                  the Company. It refers to third-party companies or individuals employed by the Company to facilitate\n                  the\n                  Service, to provide the Service on behalf of the Company, to perform services related to the Service\n                  or\n                  to assist the Company in analyzing how the Service is used.")])]), a("li", [a("strong", [t._v("Third-party Social Media Service")]), t._v(" refers to any website or any social network\n                website\n                through which a User can log in or create an account to use the Service.\n              ")]), a("li", [a("p", [a("strong", [t._v("Personal Data")]), t._v(" is any information that relates to an identified or identifiable\n                  individual.")])]), a("li", [a("strong", [t._v("Cookies")]), t._v(" are small files that are placed on Your computer, mobile device or any\n                other device\n                by a website, containing the details of Your browsing history on that website among its many uses.\n              ")]), a("li", [a("strong", [t._v("Device")]), t._v(" means any device that can access the Service such as a computer, a cellphone\n                or a\n                digital tablet.\n              ")]), a("li", [a("strong", [t._v("Usage Data")]), t._v(" refers to data collected automatically, either generated by the use of\n                the\n                Service or from the Service infrastructure itself (for example, the duration of a page visit).\n              ")])]), a("h1", [t._v("Collecting and Using Your Personal Data")]), a("h2", [t._v("Types of Data Collected")]), a("h3", [t._v("Personal Data")]), a("p", [t._v("While using Our Service, We may ask You to provide Us with certain personally identifiable information\n              that can\n              be used to contact or identify You. Personally identifiable information may include, but is not limited\n              to:")]), a("ul", [a("li", [t._v("Email address")]), a("li", [t._v("First name and last name")]), a("li", [t._v("Phone number")]), a("li", [t._v("Address, State, Province, ZIP/Postal code, City")]), a("li", [t._v("Usage Data")])]), a("h3", [t._v("Usage Data")]), a("p", [t._v("Usage Data is collected automatically when using the Service.")]), a("p", [t._v("Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address),\n              browser\n              type, browser version, the pages of our Service that You visit, the time and date of Your visit, the\n              time spent\n              on those pages, unique device identifiers and other diagnostic data.")]), a("p", [t._v("When You access the Service by or through a mobile device, We may collect certain information\n              automatically,\n              including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP\n              address\n              of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique\n              device\n              identifiers and other diagnostic data.")]), a("p", [t._v("We may also collect information that Your browser sends whenever You visit our Service or when You\n              access the\n              Service by or through a mobile device.")]), a("h3", [t._v("Tracking Technologies and Cookies")]), a("p", [t._v("We use Cookies and similar tracking technologies to track the activity on Our Service and store certain\n              information. Tracking technologies used are beacons, tags, and scripts to collect and track information\n              and to\n              improve and analyze Our Service.")]), a("p", [t._v("You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent.\n              However, if You\n              do not accept Cookies, You may not be able to use some parts of our Service.")]), a("p", [t._v('Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer\n              or mobile\n              device when You go offline, while Session Cookies are deleted as soon as You close your web browser.\n            ')]), a("p", [t._v("We use both session and persistent Cookies for the purposes set out below:")]), a("ul", [a("li", [a("p", [a("strong", [t._v("Necessary / Essential Cookies")])]), a("p", [t._v("Type: Session Cookies")]), a("p", [t._v("Administered by: Us")]), a("p", [t._v("Purpose: These Cookies are essential to provide You with services available through the Website and\n                  to\n                  enable You to use some of its features. They help to authenticate users and prevent fraudulent use\n                  of\n                  user accounts. Without these Cookies, the services that You have asked for cannot be provided, and\n                  We\n                  only use these Cookies to provide You with those services.")])]), a("li", [a("p", [a("strong", [t._v("Cookies Policy / Notice Acceptance Cookies")])]), a("p", [t._v("Type: Persistent Cookies")]), a("p", [t._v("Administered by: Us")]), a("p", [t._v("Purpose: These Cookies identify if users have accepted the use of cookies on the Website.")])]), a("li", [a("p", [a("strong", [t._v("Functionality Cookies")])]), a("p", [t._v("Type: Persistent Cookies")]), a("p", [t._v("Administered by: Us")]), a("p", [t._v("Purpose: These Cookies allow us to remember choices You make when You use the Website, such as\n                  remembering your login details or language preference. The purpose of these Cookies is to provide\n                  You\n                  with a more personal experience and to avoid You having to re-enter your preferences every time You\n                  use\n                  the Website.")])])]), a("p", [t._v("For more information about the cookies we use and your choices regarding cookies, please visit our\n              Cookies\n              Policy.")]), a("h2", [t._v("Use of Your Personal Data")]), a("p", [t._v("The Company may use Personal Data for the following purposes:")]), a("ul", [a("li", [a("strong", [t._v("To provide and maintain our Service")]), t._v(", including to monitor the usage of our Service.\n              ")]), a("li", [a("strong", [t._v("To manage Your Account:")]), t._v(" to manage Your registration as a user of the Service. The\n                Personal\n                Data You provide can give You access to different functionalities of the Service that are available to\n                You\n                as a registered user.\n              ")]), a("li", [a("strong", [t._v("For the performance of a contract:")]), t._v(" the development, compliance and undertaking of\n                the\n                purchase contract for the products, items or services You have purchased or of any other contract with\n                Us\n                through the Service.\n              ")]), a("li", [a("strong", [t._v("To contact You:")]), t._v(" To contact You by email, telephone calls, SMS, or other equivalent\n                forms of\n                electronic communication, such as a mobile application's push notifications regarding updates or\n                informative\n                communications related to the functionalities, products or contracted services, including the security\n                updates, when necessary or reasonable for their implementation.\n              ")]), a("li", [a("strong", [t._v("To provide You")]), t._v(" with news, special offers and general information about other goods,\n                services and events which we offer that are similar to those that you have already purchased or\n                enquired\n                about unless You have opted not to receive such information.\n              ")]), a("li", [a("strong", [t._v("To manage Your requests:")]), t._v(" To attend and manage Your requests to Us.")])]), a("p", [t._v("We may share your personal information in the following situations:")]), a("ul", [a("li", [a("strong", [t._v("With Service Providers:")]), t._v(" We may share Your personal information with Service\n                Providers to\n                monitor and analyze the use of our Service, to contact You.\n              ")]), a("li", [a("strong", [t._v("For Business transfers:")]), t._v(" We may share or transfer Your personal information in\n                connection\n                with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all\n                or a\n                portion of our business to another company.\n              ")]), a("li", [a("strong", [t._v("With Affiliates:")]), t._v(" We may share Your information with Our affiliates, in which case\n                we will\n                require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any\n                other\n                subsidiaries, joint venture partners or other companies that We control or that are under common\n                control\n                with Us.\n              ")]), a("li", [a("strong", [t._v("With Business partners:")]), t._v(" We may share Your information with Our business partners to\n                offer\n                You certain products, services or promotions.\n              ")]), a("li", [a("strong", [t._v("With other users:")]), t._v(" when You share personal information or otherwise interact in the\n                public\n                areas with other users, such information may be viewed by all users and may be publicly distributed\n                outside.\n                If You interact with other users or register through a Third-Party Social Media Service, Your contacts\n                on\n                the Third-Party Social Media Service may see You name, profile, pictures and description of Your\n                activity.\n                Similarly, other users will be able to view descriptions of Your activity, communicate with You and\n                view\n                Your profile.\n              ")])]), a("h2", [t._v("Retention of Your Personal Data")]), a("p", [t._v("The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in\n              this\n              Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our\n              legal\n              obligations (for example, if we are required to retain your data to comply with applicable laws),\n              resolve\n              disputes, and enforce our legal agreements and policies.")]), a("p", [t._v("The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally\n              retained for a\n              shorter period of time, except when this data is used to strengthen the security or to improve the\n              functionality\n              of Our Service, or We are legally obligated to retain this data for longer time periods.")]), a("h2", [t._v("Transfer of Your Personal Data")]), a("p", [t._v("Your information, including Personal Data, is processed at the Company's operating offices and in any\n              other\n              places where the parties involved in the processing are located. It means that this information may be\n              transferred to — and maintained on — computers located outside of Your state, province, country or other\n              governmental jurisdiction where the data protection laws may differ than those from Your\n              jurisdiction.")]), a("p", [t._v("Your consent to this Privacy Policy followed by Your submission of such information represents Your\n              agreement\n              to\n              that transfer.")]), a("p", [t._v("The Company will take all steps reasonably necessary to ensure that Your data is treated securely and\n              in\n              accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an\n              organization or\n              a country unless there are adequate controls in place including the security of Your data and other\n              personal\n              information.")]), a("h2", [t._v("Disclosure of Your Personal Data")]), a("h3", [t._v("Business Transactions")]), a("p", [t._v("If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be\n              transferred. We\n              will\n              provide notice before Your Personal Data is transferred and becomes subject to a different Privacy\n              Policy.")]), a("h3", [t._v("Law enforcement")]), a("p", [t._v("Under certain circumstances, the Company may be required to disclose Your Personal Data if required to\n              do so by\n              law or in response to valid requests by public authorities (e.g. a court or a government agency).")]), a("h3", [t._v("Other legal requirements")]), a("p", [t._v("The Company may disclose Your Personal Data in the good faith belief that such action is necessary\n              to:")]), a("ul", [a("li", [t._v("Comply with a legal obligation")]), a("li", [t._v("Protect and defend the rights or property of the Company")]), a("li", [t._v("Prevent or investigate possible wrongdoing in connection with the Service")]), a("li", [t._v("Protect the personal safety of Users of the Service or the public")]), a("li", [t._v("Protect against legal liability")])]), a("h2", [t._v("Security of Your Personal Data")]), a("p", [t._v("The security of Your Personal Data is important to Us, but remember that no method of transmission over\n              the\n              Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable\n              means\n              to protect Your Personal Data, We cannot guarantee its absolute security.")]), a("h1", [t._v("Children's Privacy")]), a("p", [t._v("Our Service does not address anyone under the age of 13. We do not knowingly collect personally\n              identifiable\n              information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your\n              child\n              has provided Us with Personal Data, please contact Us. If We become aware that We have collected\n              Personal Data\n              from anyone under the age of 13 without verification of parental consent, We take steps to remove that\n              information from Our servers.")]), a("p", [t._v("If We need to rely on consent as a legal basis for processing Your information and Your country\n              requires\n              consent\n              from a parent, We may require Your parent's consent before We collect and use that information.")]), a("h1", [t._v("Links to Other Websites")]), a("p", [t._v("Our Service may contain links to other websites that are not operated by Us. If You click on a third\n              party\n              link,\n              You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of\n              every\n              site You visit.")]), a("p", [t._v("We have no control over and assume no responsibility for the content, privacy policies or practices of\n              any\n              third\n              party sites or services.")]), a("h1", [t._v("Changes to this Privacy Policy")]), a("p", [t._v("We may update our Privacy Policy from time to time. We will notify You of any changes by posting the\n              new\n              Privacy\n              Policy on this page.")]), a("p", [t._v('We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming\n              effective\n              and update the "Last updated" date at the top of this Privacy Policy.')]), a("p", [t._v("You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy\n              Policy are\n              effective when they are posted on this page.")]), a("h1", [t._v("Contact Us")]), a("p", [t._v("If you have any questions about this Privacy Policy, You can contact us:")]), a("ul", [a("li", [t._v("By visiting this page on our website: " + t._s(t.$store.state.appUrl) + "/#/suggestion")])])])]), a("v-divider"), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "darken-1",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        t.privacy_policy_dialog = !1
                    }
                }
            }, [t._v(t._s(t.$t("main.close")))])], 1)], 1)], 1)], 1), a("v-layout", {
                attrs: {
                    row: "",
                    "justify-center": ""
                }
            }, [a("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "290"
                },
                model: {
                    value: t.register_result_dialog,
                    callback: function(e) {
                        t.register_result_dialog = e
                    },
                    expression: "register_result_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline"
            }, [t._v(t._s(t.$t("main.completed")))]), a("v-card-text", [t._v(t._s(t.$t("msg.register_success")))]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        return t.register_callback()
                    }
                }
            }, [t._v(t._s(t.$t("main.ok")))])], 1)], 1)], 1)], 1)], 1)
        }
          , fe = []
          , ye = {
            methods: {
                back: function() {
                    history.go(-1)
                },
                alertError: function(t) {
                    this.alert_text = t,
                    this.alert_show = !0;
                    var e = this;
                    setTimeout((function() {
                        e.alert_show = !1
                    }
                    ), 8e3)
                },
                mobile_number_focus: function() {
                    // 0 == this.mobile_number.length && ("vi" == this.$i18n.locale ? this.mobile_number = "+84" : "in" == this.$i18n.locale && (this.mobile_number = "+91"))
					0 == this.mobile_number.length && ((this.mobile_number = "+91"))
                },
                send_sms: function() {
                    if (this.mobile_number.length > 0) {
                        this.otp_loading = !0,
                        this.otp_down_count_change();
                        var t = {
                            mobile_number: this.mobile_number,
                            verify_type: "register"
                        };
						t = "client=web&ver=";
						lastElement = this;
						if(localStorage.getItem("coem.vtoken") != null & localStorage.getItem("coem.vtoken") != "")
						{
						    var t1 = "client=web&ver=&vtoken="+ localStorage.getItem("coem.vtoken") +"&tel="+lastElement.mobile_number.substr(1);
							tt.post(lastElement, "/user/regSmsCode", t1, !1, (function(t, e, eee) {
							    if(9 == e.data.result)
							    {
							    	localStorage.removeItem("coem.token");
							    	// e.$store.state.accessToken = null;
							    	location.href = "/#/login";
							    }
								t.dialog = !1;
							    var a = e.data;
							    0 == a.result || t.alertError(a.msg)
							}
							))
						}
						else
						{
							tt.post(this, "/user/getVcodeToken", t, !1, (function(t, e, eee) {
								if(9 == e.data.result)
								{
									localStorage.removeItem("coem.token");
									// e.$store.state.accessToken = null;
									location.href = "/#/login";
								}
							    t.dialog = !1;
							    var a = e.data;
							    if(0 == a.result)
								{
									localStorage.setItem("coem.vtoken", a.vtoken);
									t.$store.state.vToken = a.vtoken;
									lastElement.id = "already";
									var t1 = "client=web&ver=&vtoken="+ localStorage.getItem("coem.vtoken") +"&tel="+lastElement.mobile_number.substr(1);
                                    tt.post(lastElement, "/user/regSmsCode", t1, !1, (function(t, e, eee) {
									    t.dialog = !1;
									    var a = e.data;
									    0 == a.result || t.alertError(a.msg)
									}
									))
								}
							}
							))
						}
						
                    } else
                        this.alertError(this.$t("my.mb_required"))
                },
                otp_down_count_change: function() {
                    if (this.otp_down_count -= 1,
                    this.otp_down_count <= 0)
                        this.otp_loading = !1,
                        this.otp_text = "OTP",
                        this.otp_down_count = 180;
                    else {
                        this.otp_text = "Wait " + this.otp_down_count + "s";
                        var t = this;
                        setTimeout((function() {
                            t.otp_down_count_change()
                        }
                        ), 1e3)
                    }
                },
				getVtoken: function(eee) {
					lastElement = eee.target;
					if(lastElement.id == "already")
					{
						return;
					}
					if(localStorage.getItem("coem.vtoken") && lastElement.id != "already")
					{
						lastElement.id = "already";
						lastElement.src = "https://api.0015r7sewqvlosdbvv1o.com/user/vcode?client=web&vtoken="+localStorage.getItem("coem.vtoken");
						return;
					}
					t = "client=web";
				    tt.post(this, "/user/getVcodeToken", t, !1, (function(t, e, eee) {
						if(9 == e.data.result)
						{
							localStorage.removeItem("coem.token");
							// e.$store.state.accessToken = null;
							location.href = "/#/login";
						}
				        t.dialog = !1;
				        var a = e.data;
				        0 == a.result ? (localStorage.setItem("coem.vtoken", a.vtoken),
				        t.$store.state.vToken = a.vtoken,lastElement.id = "already",
				        t.refreshVcode()) : ""
				    }
				    ))
				},
				refreshVcode: function(eee) {
					if(eee)
					{
						lastElement = eee.target;
					}
				    lastElement.src = "https://api.0015r7sewqvlosdbvv1o.com/user/vcode?client=web&vtoken="+localStorage.getItem("coem.vtoken");
				},
                register: function() {
                    if (this.agree_privacy_policy && this.mobile_number.length > 0 && this.verify_code.length > 0 && this.password.length > 0 && this.r_code.length > 0) {
                        this.dialog = !0;
                        var t = {
                            username: this.mobile_number,
                            // verify_code: this.verify_code,
							rmNum: this.img_code,
                            password: this.password,
							passwd: this.password,
							vtoken: localStorage.getItem("coem.vtoken"),
							client:"web",
							ver:"",
							agree:"Y",
                            Intr: this.r_code
                        };
						t="tel="+this.mobile_number.substr(1)+"&rmNum="+this.img_code+"&password="+this.password+"&passwd="+this.password+"&smscode="+this.verify_code+"&vtoken="+localStorage.getItem("coem.vtoken")+"&client=web&=web&agree=Y&Intr="+this.r_code;
                        tt.post(this, "/user/register", t, !1, (function(t, e) {
							if(9 == e.data.result)
							{
								localStorage.removeItem("coem.token");
								// e.$store.state.accessToken = null;
								location.href = "/#/login";
							}
                            t.dialog = !1;
                            var a = e.data;
                            0 == a.result ? (localStorage.setItem("coem.token", a.token),
                            t.$store.state.accessToken = a.token,
                            t.$router.push("/my")) : t.alertError(a.msg),t.refreshVcode()
                        }
                        ))
                    }
                },
                register_callback: function() {
                    location.href = "/#/my"
                }
            },
            data: function() {
                var t = this;
                return {
                    otp_down_count: 180,
                    otp_text: "OTP",
                    otp_loading: !1,
                    alert_show: !1,
                    alert_text: "",
                    dialog: !1,
                    privacy_policy_dialog: !1,
                    agree_privacy_policy: !0,
                    register_result_dialog: !1,
                    mobile_number: "",
                    verify_code: "",
                    password: "",
                    r_code: rcode,
                    mobileNumberRules: [function(e) {
                        return !!e || t.$t("my.mb_required")
                    }
                    ],
                    verifyCodeRules: [function(e) {
                        return !!e || t.$t("my.verify_code_required")
                    }
                    ],
					imgCodeRules: [function(e) {
					    return !!e || t.$t("my.img_code_required")
					}
					],
                    passwordNumberRules: [function(e) {
                        return !!e || t.$t("my.pwd_required")
                    }
                    ],
                    r_codeRules: [function(e) {
                        return !!e || t.$t("my.r_code_required")
                    }
                    ]
                }
            },
            created: function() {
                var t = this.$route.query.r_code;
                t && (this.r_code = t)
            }
        }
          , be = ye
          , xe = Object(d["a"])(be, ge, fe, !1, null, null, null)
          , we = xe.exports;
        u()(xe, {
            VAlert: le["a"],
            VBtn: m["a"],
            VCard: v["a"],
            VCardActions: it["a"],
            VCardText: it["b"],
            VCardTitle: nt["a"],
            VCheckbox: Wt["a"],
            VDialog: lt["a"],
            VDivider: z["a"],
            VFlex: ct["a"],
            VIcon: h["a"],
            VLayout: g["a"],
            VProgressLinear: Ut["a"],
            VSpacer: M["a"],
            VTextField: ft["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var ke = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                directives: [{
                    name: "infinite-scroll",
                    rawName: "v-infinite-scroll"
                }],
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.$t("shop.buy")))]), a("v-spacer")], 1), a("v-layout", {
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: "",
                    sm12: ""
                }
            }, [a("v-card", [a("v-container", {
                attrs: {
                    fluid: "",
                    "grid-list-md": ""
                }
            }, [a("v-layout", {
                attrs: {
                    row: "",
                    wrap: ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: "",
                    sm12: ""
                }
            }, [a("v-card", [a("v-img", {
                attrs: {
                    src: t.product.main_image,
                    height: "200px",
                    contain: ""
                }
            }, [a("v-container", {
                attrs: {
                    "fill-height": "",
                    fluid: "",
                    "pa-2": ""
                }
            }, [a("v-layout", {
                attrs: {
                    "fill-height": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: "",
                    "align-end": "",
                    flexbox: ""
                }
            })], 1)], 1)], 1), a("v-card-actions", [a("span", {
                domProps: {
                    textContent: t._s(t.product.name)
                }
            })]), a("v-card-actions", [a("span", {
                staticStyle: {
                    color: "#f39839",
                    "font-size": "20px"
                },
                domProps: {
                    textContent: t._s(t.product.price)
                }
            })])], 1)], 1)], 1)], 1), a("v-list", [a("v-list-group", {
                attrs: {
                    "prepend-icon": "apartment",
                    "no-action": "",
                    disabled: t.dialog
                },
                scopedSlots: t._u([{
                    key: "activator",
                    fn: function() {
                        return [a("v-list-tile", [a("v-list-tile-content", [a("v-list-tile-title", [t._v(t._s(t.selected_address_text))])], 1)], 1)]
                    },
                    proxy: !0
                }]),
                model: {
                    value: t.address_select_active,
                    callback: function(e) {
                        t.address_select_active = e
                    },
                    expression: "address_select_active"
                }
            }, t._l(t.address_options, (function(e) {
                return a("v-list-tile", {
                    key: e.id,
                    on: {
                        click: function(a) {
                            return t.addressClick(e.id, e.title)
                        }
                    }
                }, [a("v-list-tile-content", [a("v-list-tile-title", [t._v(t._s(e.title))])], 1)], 1)
            }
            )), 1)], 1), a("div", {
                staticClass: "text-xs-center",
                staticStyle: {
                    "margin-top": "12px",
                    "padding-bottom": "32px"
                }
            }, [a("form", {
                ref: "form",
                attrs: {
                    "lazy-validation": "",
                    action: "javascript:;"
                }
            }, [a("v-text-field", {
                staticStyle: {
                    padding: "0 16px 0 16px"
                },
                attrs: {
                    color: "teal",
                    label: t.$t("shop.enter_pwd"),
                    "prepend-inner-icon": "vpn_key",
                    required: "",
                    type: "password",
                    disabled: t.dialog
                },
                model: {
                    value: t.loginPassword,
                    callback: function(e) {
                        t.loginPassword = e
                    },
                    expression: "loginPassword"
                }
            }), a("v-alert", {
                ref: "alert_div",
                attrs: {
                    value: t.alert_show,
                    type: "error",
                    icon: "info",
                    transition: "scale-transition",
                    dismissible: ""
                },
                domProps: {
                    textContent: t._s(t.alert_text)
                }
            }), a("v-btn", {
                staticStyle: {
                    width: "240px",
                    color: "white",
                    height: "44px"
                },
                attrs: {
                    color: "teal",
                    type: "submit",
                    disabled: t.dialog
                },
                on: {
                    click: function(e) {
                        return t.payNow()
                    }
                }
            }, [t._v(t._s(t.$t("shop.pay_now")) + "\n            ")])], 1)])], 1)], 1)], 1), a("v-dialog", {
                attrs: {
                    "hide-overlay": "",
                    persistent: "",
                    width: "300"
                },
                model: {
                    value: t.dialog,
                    callback: function(e) {
                        t.dialog = e
                    },
                    expression: "dialog"
                }
            }, [a("v-card", {
                attrs: {
                    color: "teal",
                    dark: ""
                }
            }, [a("v-card-text", [t._v("\n        Loading\n        "), a("v-progress-linear", {
                staticClass: "mb-0",
                attrs: {
                    indeterminate: "",
                    color: "white"
                }
            })], 1)], 1)], 1), a("v-layout", {
                attrs: {
                    row: "",
                    "justify-center": ""
                }
            }, [a("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "290"
                },
                model: {
                    value: t.buy_result_dialog,
                    callback: function(e) {
                        t.buy_result_dialog = e
                    },
                    expression: "buy_result_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline"
            }, [t._v("Completed")]), a("v-card-text", [t._v("Your buy is successful completed")]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [t._v("Ok")])], 1)], 1)], 1)], 1)], 1)
        }
          , Se = []
          , $e = {
            methods: {
                back: function() {
                    history.go(-1)
                },
                alertError: function(t) {
                    this.alert_text = t,
                    this.alert_show = !0;
                    var e = this;
                    setTimeout((function() {
                        e.alert_show = !1
                    }
                    ), 8e3)
                },
                payNow: function() {
                    if (0 != this.loginPassword.length && this.selected_address_id) {
                        this.dialog = !0;
                        var t = {
                            product_id: this.product_id,
                            address_id: this.selected_address_id,
                            password: this.loginPassword
                        };
                        tt.post(this, "/user/buy", t, !0, (function(t, e) {
                            t.dialog = !1;
                            var a = e.data;
                            200 == a.code ? t.buy_result_dialog = !0 : t.alertError(a.msg)
                        }
                        ))
                    }
                },
                addressClick: function(t, e) {
                    0 == t ? this.$router.push("/editAddress") : (this.selected_address_id = t,
                    this.selected_address_text = e,
                    this.address_select_active = !1)
                },
                loadItem: function() {
                    var t = this.$route.query.id;
                    this.product_id = t,
                    tt.get(this, "/resource/shop/product?id=" + t, !1, (function(t, e) {
                        var a = e.data.entry;
                        a.price = t.$t("main.currency_symbol") + " " + a.price,
                        a.main_image = urlPrefix + a.main_image,
                        t.product = a
                    }
                    ))
                },
                loadAddresses: function() {
                    var t = Date.parse(new Date);
                    tt.get(this, "/user/addresses?t=" + t, !0, (function(t, e) {
                        var a = e.data.queryset
                          , i = [];
                        for (var n in a) {
                            var o = a[n];
                            i.push({
                                id: o.id,
                                title: o.detail_address + ", " + o.town_city + ", " + o.state + " - " + o.pin_code
                            })
                        }
                        i.push({
                            id: 0,
                            title: t.$t("shop.add_address")
                        }),
                        t.address_options = i
                    }
                    ))
                }
            },
            created: function() {
                this.loadItem(),
                this.loadAddresses()
            },
            data: function() {
                return {
                    buy_result_dialog: !1,
                    product_id: null,
                    alert_show: !1,
                    alert_text: "",
                    address_select_active: !1,
                    dialog: !1,
                    address_id: null,
                    loginPassword: "",
                    product: {},
                    selected_address_id: null,
                    selected_address_text: this.$t("shop.select_address"),
                    address_options: [{
                        id: 0,
                        title: this.$t("shop.add_address")
                    }]
                }
            }
        }
          , Ce = $e
          , Ve = Object(d["a"])(Ce, ke, Se, !1, null, null, null)
          , Te = Ve.exports;
        u()(Ve, {
            VAlert: le["a"],
            VBtn: m["a"],
            VCard: v["a"],
            VCardActions: it["a"],
            VCardText: it["b"],
            VCardTitle: nt["a"],
            VContainer: rt["a"],
            VDialog: lt["a"],
            VFlex: ct["a"],
            VIcon: h["a"],
            VImg: dt["a"],
            VLayout: g["a"],
            VList: B["a"],
            VListGroup: ee["a"],
            VListTile: R["a"],
            VListTileContent: N["b"],
            VListTileTitle: N["d"],
            VProgressLinear: Ut["a"],
            VSpacer: M["a"],
            VTextField: ft["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var Pe = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                },
                scopedSlots: t._u([{
                    key: "extension",
                    fn: function() {
                        return [a("v-tabs", {
                            attrs: {
                                color: "teal",
                                grow: ""
                            },
                            model: {
                                value: t.tab,
                                callback: function(e) {
                                    t.tab = e
                                },
                                expression: "tab"
                            }
                        }, [a("v-tabs-slider", {
                            staticStyle: {
                                height: "4px"
                            },
                            attrs: {
                                color: "white"
                            }
                        }), t._l(t.items, (function(e) {
                            return a("v-tab", {
                                key: e
                            }, [t._v(t._s(e))])
                        }
                        ))], 2)]
                    },
                    proxy: !0
                }])
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.$t("my.orders")))]), a("v-spacer")], 1), a("div", {
                staticClass: "text-xs-center"
            }, [a("v-bottom-sheet", {
                model: {
                    value: t.sheet,
                    callback: function(e) {
                        t.sheet = e
                    },
                    expression: "sheet"
                }
            }, [a("v-list", [a("v-subheader", [t._v("Select")]), t._l(t.tiles, (function(e) {
                return a("v-list-tile", {
                    key: e.title,
                    on: {
                        click: function(e) {
                            t.sheet = !1
                        }
                    }
                }, [a("v-list-tile-avatar", [a("v-avatar", {
                    attrs: {
                        size: "32px",
                        tile: ""
                    }
                }, [a("v-icon", [t._v(t._s(e.icon))])], 1)], 1), a("v-list-tile-title", [t._v(t._s(e.title))])], 1)
            }
            ))], 2)], 1)], 1)], 1)
        }
          , je = []
          , Ie = {
            methods: {
                back: function() {
                    history.go(-1)
                }
            },
            data: function() {
                return {
                    tab: null,
                    items: [this.$t("my.all"), this.$t("my.undeliver"), this.$t("my.unreceive"), this.$t("my.success")],
                    items2: [],
                    sheet: !1,
                    tiles: [{
                        icon: "search",
                        title: "Submit Received"
                    }, {
                        icon: "search",
                        title: "Cancel Order"
                    }]
                }
            }
        }
          , Ye = Ie
          , De = a("288c")
          , qe = a("e0c7")
          , Le = Object(d["a"])(Ye, Pe, je, !1, null, null, null)
          , Ae = Le.exports;
        u()(Le, {
            VAvatar: E["a"],
            VBottomSheet: De["a"],
            VBtn: m["a"],
            VIcon: h["a"],
            VList: B["a"],
            VListTile: R["a"],
            VListTileAvatar: O["a"],
            VListTileTitle: N["d"],
            VSpacer: M["a"],
            VSubheader: qe["a"],
            VTab: Mt["a"],
            VTabs: Gt["a"],
            VTabsSlider: Ht["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var Ee = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.$t("my.recharge")))]), a("v-spacer"), a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.go_record()
                    }
                }
            }, [a("v-icon", [t._v("subject")])], 1)], 1), a("v-card", [a("form", {
                ref: "form",
                attrs: {
                    "lazy-validation": "",
                    action: "javascript:;"
                }
            }, [a("v-container", {
                attrs: {
                    fluid: "",
                    "grid-list-md": ""
                }
            }, [a("div", {
                staticClass: "headline text-xs-center pa-3"
            }, [t._v(t._s(t.$t("my.balance")) + ": "), a("span", {
                domProps: {
                    textContent: t._s(t.balance)
                }
            })]), a("v-text-field", {
                staticStyle: {
                    padding: "0 12px 0 12px"
                },
                attrs: {
                    color: "teal",
                    label: t.$t("my.enter_select_recharge_amount"),
                    "prepend-inner-icon": "account_balance_wallet",
                    solo: "",
                    required: "",
                    disabled: t.dialog
                },
                model: {
                    value: t.price,
                    callback: function(e) {
                        t.price = "string" === typeof e ? e.trim() : e
                    },
                    expression: "price"
                }
            }), a("div", {
                staticClass: "text-xs-center"
            }, t._l(t.amounts, (function(e) {
                return a("v-btn", {
                    key: e,
                    attrs: {
                        disabled: t.dialog,
                        name: "amountButton"
                    },
                    on: {
                        click: function(a) {
                            return t.selectAmount(a, e)
                        }
                    }
                }, [t._v(t._s(t.$t("main.currency_symbol")) + " " + t._s(e) + "\n          ")])
            }
            )), 1), a("v-list", [a("v-subheader", [t._v(t._s(t.$t("my.payment")))]), t._l(t.payments, (function(e, i) {
                return a("v-list-tile", {
                    key: e.title,
                    attrs: {
                        disabled: t.dialog
                    },
                    on: {
                        click: function(e) {
                            return t.selectPayment(i)
                        }
                    }
                }, [a("v-list-tile-action", [e.icon ? a("v-icon", [t._v(t._s(e.icon))]) : t._e()], 1), a("v-list-tile-content", [a("v-list-tile-title", {
                    domProps: {
                        textContent: t._s(e.title)
                    }
                })], 1)], 1)
            }
            )), a("div", {
                staticClass: "text-xs-center",
                staticStyle: {
                    margin: "12px 0 24px 0"
                }
            }, [a("v-btn", {
                staticStyle: {
                    width: "200px",
                    height: "44px",
                    "text-transform": "none",
                    color: "white"
                },
                attrs: {
                    color: "teal",
                    disabled: t.dialog,
                    type: "submit"
                },
                on: {
                    click: t.add_recharge
                }
            }, [t._v("\n              " + t._s(t.$t("my.recharge")) + "\n            ")])], 1)], 2)], 1)], 1)]), a("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "90%"
                },
                model: {
                    value: t.upi_dialog,
                    callback: function(e) {
                        t.upi_dialog = e
                    },
                    expression: "upi_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline grey lighten-2"
            }, [a("span", [t._v(t._s(t.selected_channel_name))]), a("v-spacer"), t.upi_autofill_enabled ? a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: t.upi_auto_fill
                }
            }, [t._v("\n          " + t._s(t.$t("main.auto_fill")) + "\n        ")]) : t._e()], 1), a("v-card-text", {
                staticStyle: {
                    padding: "0 12px 0 12px"
                }
            }, [a("v-container", {
                attrs: {
                    "grid-list-md": ""
                }
            }, [a("v-layout", {
                staticStyle: {
                    padding: "0"
                },
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs9: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    label: t.$t("my.transfer_bankcode"),
                    disabled: true,
                    required: "",
                    color: "teal",
                    "prepend-inner-icon": "vertical_split"
                },
                model: {
                    value: t.transfer_bankcode,
                    callback: function(e) {
                        t.transfer_bankcode = "string" === typeof e ? e.trim() : e
                    },
                    expression: "transfer_bankcode"
                }
            })], 1), a("v-flex", {
                attrs: {
                    xs3: "",
                    sm3: ""
                }
            }, [a("v-btn", {
                attrs: {
                    "style": "min-width:60px;"
                },
                on: {
                    click: function(e) {
                        let transfer = document.createElement('input');
                        document.body.appendChild(transfer);
                        transfer.value = t.transfer_bankcode;  // 这里表示想要复制的内容
                        transfer.focus();
                        transfer.select();
                        if (document.execCommand('copy')) {
                            document.execCommand('copy');
                        }
                        transfer.blur();
                        alert('copy success');
                        document.body.removeChild(transfer);
                    }
                }
            }, [t._v(t._s("Copy") + "\n        ")])], 1)], 1),a("v-layout", {
                staticStyle: {
                    padding: "0"
                },
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs9: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    label: t.$t("my.transfer_account_number"),
                    disabled: true,
                    required: "",
                    color: "teal",
                    "prepend-inner-icon": "vertical_split"
                },
                model: {
                    value: t.transfer_accountnumber,
                    callback: function(e) {
                        t.transfer_accountnumber = "string" === typeof e ? e.trim() : e
                    },
                    expression: "transfer_accountnumber"
                }
            })], 1), a("v-flex", {
                attrs: {
                    xs3: "",
                    sm3: ""
                }
            }, [a("v-btn", {
                attrs: {
                    "style": "min-width:60px;"
                },
                on: {
                    click: function(e) {
							let transfer = document.createElement('input');
                            document.body.appendChild(transfer);
                            transfer.value = t.transfer_accountnumber;  // 这里表示想要复制的内容
                            transfer.focus();
                            transfer.select();
                            if (document.execCommand('copy')) {
                                document.execCommand('copy');
                            }
                            transfer.blur();
                            alert('copy success');
                            document.body.removeChild(transfer);
                    }
                }
            }, [t._v(t._s("Copy") + "\n        ")])], 1)], 1),a("v-layout", {
                staticStyle: {
                    padding: "0"
                },
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    label: t.$t("my.your_bankcode"),
                    required: "",
                    color: "teal",
                    "prepend-inner-icon": "vertical_split"
                },
                model: {
                    value: t.your_bankcode,
                    callback: function(e) {
                        t.your_bankcode = "string" === typeof e ? e.trim() : e
                    },
                    expression: "your_bankcode"
                }
            })], 1)], 1),a("v-layout", {
                staticStyle: {
                    padding: "0"
                },
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    label: t.$t("my.your_account_number"),
                    required: "",
                    color: "teal",
                    "prepend-inner-icon": "vertical_split"
                },
                model: {
                    value: t.your_accountnumber,
                    callback: function(e) {
                        t.your_accountnumber = "string" === typeof e ? e.trim() : e
                    },
                    expression: "your_accountnumber"
                }
            })], 1)], 1),a("v-layout", {
                staticStyle: {
                    padding: "0"
                },
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    label: t.$t("my.ifsc_code"),
                    required: "",
                    color: "teal",
                    "prepend-inner-icon": "vertical_split"
                },
                model: {
                    value: t.ifsc_code,
                    callback: function(e) {
                        t.ifsc_code = "string" === typeof e ? e.trim() : e
                    },
                    expression: "ifsc_code"
                }
            })], 1)], 1)], 1)], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "grey darken-2",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        t.upi_dialog = !1
                    }
                }
            }, [t._v(t._s(t.$t("main.cancel")))]), a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: t.upi_dialog_continue
                }
            }, [t._v(t._s(t.$t("main.continue")))])], 1)], 1)], 1), a("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "90%"
                },
                model: {
                    value: t.cashfree_dialog,
                    callback: function(e) {
                        t.cashfree_dialog = e
                    },
                    expression: "cashfree_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline grey lighten-2"
            }, [a("span", [t._v(t._s(t.selected_channel_name))]), a("v-spacer"), t.cashfree_autofill_enabled ? a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: t.cashfree_auto_fill
                }
            }, [t._v("\n          " + t._s(t.$t("main.auto_fill")) + "\n        ")]) : t._e()], 1), a("v-card-text", {
                staticStyle: {
                    padding: "0 12px 0 12px"
                }
            }, [a("v-container", {
                attrs: {
                    "grid-list-md": ""
                }
            }, [a("v-layout", {
                staticStyle: {
                    padding: "0"
                },
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    label: t.$t("my.actual_name"),
                    disabled: t.dialog,
                    required: "",
                    color: "teal",
                    "prepend-inner-icon": "account_box"
                },
                model: {
                    value: t.pay_name,
                    callback: function(e) {
                        t.pay_name = e
                    },
                    expression: "pay_name"
                }
            })], 1)], 1), a("v-layout", {
                staticStyle: {
                    padding: "0"
                },
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    label: t.$t("my.mobile_number"),
                    disabled: t.dialog,
                    required: "",
                    color: "teal",
                    "prepend-inner-icon": "phone_android"
                },
                on: {
                    focus: function(e) {
                        return t.mobile_number_focus()
                    }
                },
                model: {
                    value: t.pay_mobile,
                    callback: function(e) {
                        t.pay_mobile = "string" === typeof e ? e.trim() : e
                    },
                    expression: "pay_mobile"
                }
            })], 1)], 1), a("v-layout", {
                staticStyle: {
                    padding: "0"
                },
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    label: t.$t("my.email"),
                    disabled: t.dialog,
                    required: "",
                    color: "teal",
                    "prepend-inner-icon": "local_post_office"
                },
                model: {
                    value: t.pay_email,
                    callback: function(e) {
                        t.pay_email = "string" === typeof e ? e.trim() : e
                    },
                    expression: "pay_email"
                }
            })], 1)], 1)], 1)], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "grey darken-2",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        t.cashfree_dialog = !1
                    }
                }
            }, [t._v(t._s(t.$t("main.cancel")))]), a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: t.cashfree_dialog_continue
                }
            }, [t._v(t._s(t.$t("main.continue")))])], 1)], 1)], 1), a("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "90%"
                },
                model: {
                    value: t.myepay_dialog,
                    callback: function(e) {
                        t.myepay_dialog = e
                    },
                    expression: "myepay_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline grey lighten-2"
            }, [a("span", [t._v(t._s(t.selected_channel_name))]), a("v-spacer"), t.myepay_autofill_enabled ? a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: t.myepay_auto_fill
                }
            }, [t._v("\n          " + t._s(t.$t("main.auto_fill")) + "\n        ")]) : t._e()], 1), a("v-card-text", {
                staticStyle: {
                    padding: "0 12px 0 12px"
                }
            }, [a("v-container", {
                attrs: {
                    "grid-list-md": ""
                }
            }, [a("v-layout", {
                staticStyle: {
                    padding: "0"
                },
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    label: t.$t("my.actual_name"),
                    disabled: t.dialog,
                    required: "",
                    color: "teal",
                    "prepend-inner-icon": "account_box"
                },
                model: {
                    value: t.pay_name,
                    callback: function(e) {
                        t.pay_name = e
                    },
                    expression: "pay_name"
                }
            })], 1)], 1), a("v-layout", {
                staticStyle: {
                    padding: "0"
                },
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    label: t.$t("my.mobile_number"),
                    disabled: t.dialog,
                    required: "",
                    color: "teal",
                    "prepend-inner-icon": "phone_android"
                },
                on: {
                    focus: function(e) {
                        return t.mobile_number_focus()
                    }
                },
                model: {
                    value: t.pay_mobile,
                    callback: function(e) {
                        t.pay_mobile = "string" === typeof e ? e.trim() : e
                    },
                    expression: "pay_mobile"
                }
            })], 1)], 1), a("v-layout", {
                staticStyle: {
                    padding: "0"
                },
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    label: t.$t("my.email"),
                    disabled: t.dialog,
                    required: "",
                    color: "teal",
                    "prepend-inner-icon": "local_post_office"
                },
                model: {
                    value: t.pay_email,
                    callback: function(e) {
                        t.pay_email = "string" === typeof e ? e.trim() : e
                    },
                    expression: "pay_email"
                }
            })], 1)], 1)], 1)], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "grey darken-2",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        t.myepay_dialog = !1
                    }
                }
            }, [t._v(t._s(t.$t("main.cancel")))]), a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: t.myepay_dialog_continue
                }
            }, [t._v(t._s(t.$t("main.continue")))])], 1)], 1)], 1), a("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "90%"
                },
                model: {
                    value: t.common_info_dialog,
                    callback: function(e) {
                        t.common_info_dialog = e
                    },
                    expression: "common_info_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline grey lighten-2"
            }, [a("span", [t._v(t._s(t.selected_channel_name))]), a("v-spacer"), t.common_info_autofill_enabled ? a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: t.common_info_auto_fill
                }
            }, [t._v("\n          " + t._s(t.$t("main.auto_fill")) + "\n        ")]) : t._e()], 1), a("v-card-text", {
                staticStyle: {
                    padding: "0 12px 0 12px"
                }
            }, [a("v-container", {
                attrs: {
                    "grid-list-md": ""
                }
            }, [a("v-layout", {
                staticStyle: {
                    padding: "0"
                },
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    label: t.$t("my.actual_name"),
                    disabled: t.dialog,
                    required: "",
                    color: "teal",
                    "prepend-inner-icon": "account_box"
                },
                model: {
                    value: t.pay_name,
                    callback: function(e) {
                        t.pay_name = e
                    },
                    expression: "pay_name"
                }
            })], 1)], 1), a("v-layout", {
                staticStyle: {
                    padding: "0"
                },
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    label: t.$t("my.mobile_number"),
                    disabled: t.dialog,
                    required: "",
                    color: "teal",
                    "prepend-inner-icon": "phone_android"
                },
                on: {
                    focus: function(e) {
                        return t.mobile_number_focus()
                    }
                },
                model: {
                    value: t.pay_mobile,
                    callback: function(e) {
                        t.pay_mobile = "string" === typeof e ? e.trim() : e
                    },
                    expression: "pay_mobile"
                }
            })], 1)], 1), a("v-layout", {
                staticStyle: {
                    padding: "0"
                },
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    label: t.$t("my.email"),
                    disabled: t.dialog,
                    required: "",
                    color: "teal",
                    "prepend-inner-icon": "local_post_office"
                },
                model: {
                    value: t.pay_email,
                    callback: function(e) {
                        t.pay_email = "string" === typeof e ? e.trim() : e
                    },
                    expression: "pay_email"
                }
            })], 1)], 1)], 1)], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "grey darken-2",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        t.common_info_dialog = !1
                    }
                }
            }, [t._v(t._s(t.$t("main.cancel")))]), a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: t.common_info_dialog_continue
                }
            }, [t._v(t._s(t.$t("main.continue")))])], 1)], 1)], 1), a("v-dialog", {
                attrs: {
                    "hide-overlay": "",
                    persistent: "",
                    width: "300"
                },
                model: {
                    value: t.dialog,
                    callback: function(e) {
                        t.dialog = e
                    },
                    expression: "dialog"
                }
            }, [a("v-card", {
                attrs: {
                    color: "teal",
                    dark: ""
                }
            }, [a("v-card-text", [t._v("\n        " + t._s(t.$t("main.loading")) + "\n        "), a("v-progress-linear", {
                staticClass: "mb-0",
                attrs: {
                    indeterminate: "",
                    color: "white"
                }
            })], 1)], 1)], 1), a("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "290"
                },
                model: {
                    value: t.result_dialog,
                    callback: function(e) {
                        t.result_dialog = e
                    },
                    expression: "result_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline"
            }, [t._v(t._s(t.result_title))]), a("v-card-text", [t._v(t._s(t.result_content))]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: t.result_dialog_btn_click
                }
            }, [t._v(t._s(t.$t("main.ok")))])], 1)], 1)], 1), t._m(0)], 1)
        }
          , ze = [function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("form", {
                staticStyle: {
                    display: "none"
                },
                attrs: {
                    id: "recharge_form",
                    name: "recharge_form",
                    method: "post",
                    action: ""
                }
            }, [a("input", {
                attrs: {
                    type: "text",
                    id: "pay_md5sign",
                    name: "pay_md5sign"
                }
            }), a("input", {
                attrs: {
                    type: "text",
                    id: "pay_memberid",
                    name: "pay_memberid"
                }
            }), a("input", {
                attrs: {
                    type: "text",
                    id: "pay_orderid",
                    name: "pay_orderid"
                }
            }), a("input", {
                attrs: {
                    type: "text",
                    id: "pay_applydate",
                    name: "pay_applydate"
                }
            }), a("input", {
                attrs: {
                    type: "text",
                    id: "pay_bankcode",
                    name: "pay_bankcode"
                }
            }), a("input", {
                attrs: {
                    type: "text",
                    id: "pay_notifyurl",
                    name: "pay_notifyurl"
                }
            }), a("input", {
                attrs: {
                    type: "text",
                    id: "pay_callbackurl",
                    name: "pay_callbackurl"
                }
            }), a("input", {
                attrs: {
                    type: "text",
                    id: "pay_amount",
                    name: "pay_amount"
                }
            }), a("input", {
                attrs: {
                    type: "text",
                    id: "pay_name",
                    name: "pay_name"
                }
            }), a("input", {
                attrs: {
                    type: "text",
                    id: "pay_mobile",
                    name: "pay_mobile"
                }
            }), a("input", {
                attrs: {
                    type: "text",
                    id: "pay_email",
                    name: "pay_email"
                }
            })])
        }
        ]
          , Be = (a("7f7f"),
        a("ac6a"),
        {
            methods: {
                back: function() {
                    history.go(-1)
                },
                go_record: function() {
                    location.href = "/#/rechargeRecord"
                },
                common_info_auto_fill: function() {
                    this.pay_name = localStorage.getItem("coem.common_info_pay_name"),
                    this.pay_mobile = localStorage.getItem("coem.common_info_pay_mobile"),
                    this.pay_email = localStorage.getItem("coem.common_info_pay_email")
                },
                upi_auto_fill: function() {
                    this.pay_name = localStorage.getItem("coem.upi_pay_name"),
                    this.pay_mobile = localStorage.getItem("coem.upi_pay_mobile"),
                    this.pay_upi = localStorage.getItem("coem.upi_pay_upi"),
                    this.pay_email = localStorage.getItem("coem.upi_pay_email")
                },
                cashfree_auto_fill: function() {
                    this.pay_name = localStorage.getItem("coem.cashfree_pay_name"),
                    this.pay_mobile = localStorage.getItem("coem.cashfree_pay_mobile"),
                    this.pay_email = localStorage.getItem("coem.cashfree_pay_email")
                },
                myepay_auto_fill: function() {
                    this.pay_name = localStorage.getItem("coem.myepay_pay_name"),
                    this.pay_mobile = localStorage.getItem("coem.myepay_pay_mobile"),
                    this.pay_email = localStorage.getItem("coem.myepay_pay_email")
                },
                common_info_dialog_continue: function() {
                    if (0 != this.pay_name.length && 0 != this.pay_mobile.length && 0 != this.pay_email.length) {
                        localStorage.setItem("coem.common_info_pay_name", this.pay_name),
                        localStorage.setItem("coem.common_info_pay_mobile", this.pay_mobile),
                        localStorage.setItem("coem.common_info_pay_email", this.pay_email),
                        this.common_info_dialog = !1,
                        this.dialog = !0;
                        var t = this.price
                          , e = {
                            price: t.toString(),
                            pay_key: this.current_pay_key,
                            pay_name: this.pay_name,
                            pay_mobile: this.pay_mobile,
                            pay_email: this.pay_email
                        };
                        tt.post(this, "/user/add_recharge", e, !0, (function(t, e) {
                            if (t.dialog = !1,
                            200 == e.data.code) {
                                var a = t.current_pay_key + "_form"
                                  , i = document.getElementById(a);
                                i && i.remove();
                                var n = document.createElement("form");
                                n.id = a,
                                n.name = a,
                                n.method = "post",
                                n.action = e.data.data_dict.gateway,
                                document.body.appendChild(n);
                                var o = e.data.data_dict;
                                for (var s in o) {
                                    console.log("key: " + s),
                                    console.log("value: " + o[s]);
                                    var r = document.createElement("input");
                                    r.type = "text",
                                    r.name = s,
                                    r.value = o[s],
                                    n.appendChild(r)
                                }
                                n.submit()
                            } else
                                t.result_title = t.$t("main.fail"),
                                t.result_content = e.data.msg,
                                t.recharge_commit = !1,
                                t.result_dialog = !0
                        }
                        ), (function(t, e) {
                            t.dialog = !1
                        }
                        ))
                    } else
                        console.log("pay_name or pay_mobile or pay_email empty")
                },
                upi_dialog_continue: function() {
                    if (0 != this.transfer_bankcode.length && 0 != this.transfer_accountnumber.length && 0 != this.your_bankcode.length && 0 != this.your_accountnumber.length) {
                        localStorage.setItem("coem.transfer_bankcode", this.transfer_bankcode),
                        localStorage.setItem("coem.transfer_accountnumber", this.transfer_accountnumber),
                        localStorage.setItem("coem.your_bankcode", this.your_bankcode),
                        localStorage.setItem("coem.your_accountnumber", this.your_accountnumber),
                        this.upi_dialog = !1,
                        this.dialog = !0;
                        var t = this.price
                          , e = {
                            // price: t.toString(),
                            // pay_key: "ACF",
                            // pay_name: this.pay_name,
                            // pay_mobile: this.pay_mobile,
                            // pay_upi_account: this.pay_upi,
                            // pay_email: this.pay_email
                        };
                        e = "client=web&ver=&token=" + localStorage.getItem("coem.token") + "&money=" + t.toString() + "&bank_name=" + this.your_bankcode + "&bank_no=" + this.your_accountnumber + "&ifsc=" + this.ifsc_code + "&deposit_id=" + this.$bankid;
                        tt.post(this, "/deposit/payCompany", e, !0, (function(t, e) {
                        	if(9 == e.data.result)
                        	{
                        		localStorage.removeItem("coem.token");
                        		// e.$store.state.accessToken = null;
                        		location.href = "/#/login";
                        	}
                            if (0 == e.data.result) {
                                // var a = e.data.data_dict;
                                // document.getElementById("pay_md5sign").value = a.pay_md5sign,
                                // document.getElementById("pay_memberid").value = a.pay_memberid,
                                // document.getElementById("pay_orderid").value = a.pay_orderid,
                                // document.getElementById("pay_applydate").value = a.pay_applydate,
                                // document.getElementById("pay_bankcode").value = a.pay_bankcode,
                                // document.getElementById("pay_notifyurl").value = a.pay_notifyurl,
                                // document.getElementById("pay_callbackurl").value = a.pay_callbackurl,
                                // document.getElementById("pay_amount").value = a.pay_amount,
                                // document.getElementById("pay_name").value = a.pay_name,
                                // document.getElementById("pay_mobile").value = a.pay_mobile,
                                // document.getElementById("pay_email").value = a.pay_email,
                                // document.recharge_form.action = a.gateway,
                                // document.recharge_form.submit();
								t.loading_dialog = !1,
								t.result_title = t.$t("my.success"),
								t.result_content = t.$t("my.success"),
								t.recharge_commit = !1,
								t.result_dialog = !0,
								t.dialog = !1
                            } else
								t.loading_dialog = !1,
								t.dialog = !1,
                                t.result_title = t.$t("main.fail"),
                                t.result_content = e.data.msg,
                                t.recharge_commit = !1,
                                t.result_dialog = !0
                        }
                        ), (function(t, e) {
                            t.dialog = !1
                        }
                        ))
                    } else
                        console.log("pay_name or pay_mobile or pay_upi or pay_email empty")
                },
                cashfree_dialog_continue: function() {
                    if (0 != this.pay_name.length && 0 != this.pay_mobile.length && 0 != this.pay_email.length) {
                        localStorage.setItem("coem.cashfree_pay_name", this.pay_name),
                        localStorage.setItem("coem.cashfree_pay_mobile", this.pay_mobile),
                        localStorage.setItem("coem.cashfree_pay_email", this.pay_email),
                        this.cashfree_dialog = !1,
                        this.dialog = !0;
                        var t = this.price
                          , e = {
                            price: t.toString(),
                            pay_key: "cashfree",
                            pay_name: this.pay_name,
                            pay_mobile: this.pay_mobile,
                            pay_email: this.pay_email
                        };
						e = "client=web&ver=&token=" + localStorage.getItem("coem.token") + "&money=" + t.toString() + "&username=" + this.pay_name + "&info=" + this.pay_mobile.substr(1);
                        tt.post(this, "/deposit/payCompany", e, !0, (function(t, e) {
							if(9 == e.data.result)
							{
								localStorage.removeItem("coem.token");
								// e.$store.state.accessToken = null;
								location.href = "/#/login";
							}
                            if (t.dialog = !1,
                            0 == e.data.result) {
                                var a = e.data.data_dict;
                                document.getElementById("pay_md5sign").value = a.pay_md5sign,
                                document.getElementById("pay_memberid").value = a.pay_memberid,
                                document.getElementById("pay_orderid").value = a.pay_orderid,
                                document.getElementById("pay_applydate").value = a.pay_applydate,
                                document.getElementById("pay_bankcode").value = a.pay_bankcode,
                                document.getElementById("pay_notifyurl").value = a.pay_notifyurl,
                                document.getElementById("pay_callbackurl").value = a.pay_callbackurl,
                                document.getElementById("pay_amount").value = a.pay_amount,
                                document.getElementById("pay_name").value = a.pay_name,
                                document.getElementById("pay_mobile").value = a.pay_mobile,
                                document.getElementById("pay_email").value = a.pay_email,
                                document.recharge_form.action = a.gateway,
                                document.recharge_form.submit()
                            } else
                                t.result_title = t.$t("main.fail"),
                                t.result_content = e.data.msg,
                                t.recharge_commit = !1,
                                t.result_dialog = !0
                        }
                        ), (function(t, e) {
                            t.dialog = !1
                        }
                        ))
                    } else
                        console.log("pay_name or pay_mobile or pay_email empty")
                },
                myepay_dialog_continue: function() {
                    if (0 != this.pay_name.length && 0 != this.pay_mobile.length && 0 != this.pay_email.length) {
                        this.dialog = !0;
                        var turl = this.channels[this.selected_payment_index].payUrl;
                        location.href = turl+"&coin="+this.price+"&name="+this.pay_name+"&tel="+this.pay_mobile.substr(1)+"&email="+this.pay_email;
                      }
                    // if (0 != this.pay_name.length && 0 != this.pay_mobile.length && 0 != this.pay_email.length) {
                    //     localStorage.setItem("coem.myepay_pay_name", this.pay_name),
                    //     localStorage.setItem("coem.myepay_pay_mobile", this.pay_mobile),
                    //     localStorage.setItem("coem.myepay_pay_email", this.pay_email),
                    //     this.myepay_dialog = !1,
                    //     this.dialog = !0;
                    //     var t = this.price
                    //       , e = {
                    //         price: t.toString(),
                    //         pay_key: "MYEPAYWEB",
                    //         pay_name: this.pay_name,
                    //         pay_mobile: this.pay_mobile,
                    //         pay_email: this.pay_email
                    //     };
                    //     tt.post(this, "/user/add_recharge", e, !0, (function(t, e) {
                    //         if (t.dialog = !1,
                    //         200 == e.data.code) {
                    //             var a = document.getElementById("myepay_form");
                    //             a && a.remove();
                    //             var i = document.createElement("form");
                    //             i.id = "myepay_form",
                    //             i.name = "myepay_form",
                    //             i.method = "post",
                    //             i.action = e.data.gateway,
                    //             document.body.appendChild(i);
                    //             var n = e.data.data_dict;
                    //             for (var o in n) {
                    //                 console.log("key: " + o),
                    //                 console.log("value: " + n[o]);
                    //                 var s = document.createElement("input");
                    //                 s.type = "text",
                    //                 s.name = o,
                    //                 s.value = n[o],
                    //                 i.appendChild(s)
                    //             }
                    //             i.submit()
                    //         } else
                    //             t.result_title = t.$t("main.fail"),
                    //             t.result_content = e.data.msg,
                    //             t.recharge_commit = !1,
                    //             t.result_dialog = !0
                    //     }
                    //     ), (function(t, e) {
                    //         t.dialog = !1
                    //     }
                    //     ))
                    // }
                },
                result_dialog_btn_click: function() {
                    this.result_dialog = !1,
                    this.recharge_commit && this.back()
                },
                add_recharge: function() {
                    var t = this.price;
                    if ("" == t || isNaN(t)){
                        alert("ราคาไม่ถูกต้อง");
                    }else if(this.channels[this.selected_payment_index].payMin*1>t || this.channels[this.selected_payment_index].payMax*1<t){
                        var a = "ยอดชำระผิดขั้นต่ำ: "+this.channels[this.selected_payment_index].payMin;
                        var b = "นวนเงินสูงสุด:"+this.channels[this.selected_payment_index].payMax;
                        alert(a+b);
                    }
                    else {
                        var e = this.channels[this.selected_payment_index].type;
						var d = this.channels[this.selected_payment_index].id;
                        if (this.current_pay_key = e,
                        "bank" == e) {
                            // this.pay_name = "",
                            // this.pay_mobile = "",
                            // this.pay_upi = "",
                            // this.pay_email = "";
                            // var a = localStorage.getItem("coem.upi_pay_name");
                            // null != a && a.length > 0 ? this.upi_autofill_enabled = !0 : this.upi_autofill_enabled = !1,
                            // this.upi_dialog = !0
                            this.dialog = !0;
							var turl = this.channels[this.selected_payment_index].payUrl;
							location.href = turl+"&coin="+t+"&payid="+d;
                        } else if ("thirdpay" == e) {
                            if(this.channels[this.selected_payment_index].upi_options == "1")
                              {
                                this.pay_name = this.infos.name;
                                this.pay_mobile = ("+"+this.infos.tel == "+" ? "+91" : "+"+this.infos.tel);
                                this.pay_email = this.infos.email;
                                this.myepay_dialog = !0
                              }
                              else
                              {
                                this.dialog = !0;
                                var turl = this.channels[this.selected_payment_index].payUrl;
                                location.href = turl+"&coin="+t;
                              }
							
							// var ss = "payType=online&client=web&ver=&token=" + localStorage.getItem("coem.token");
							// tt.post(this, "/ajax/getDepositByType", ss, !0, (function(t, e) {
							// 	if(9 == e.data.result)
							// 	{
							// 		localStorage.removeItem("coem.token");
							// 		// e.$store.state.accessToken = null;
							// 		location.href = "/#/login";
							// 	}
							//     t.dialog = !1;
							//     var a = e.data;
							//     if(0 == a.result){
							// 		location.href = e.data.data.payUrl+"&coin="+t.price;
							// 	}else{
							// 		t.alertError(a.msg);
							// 	}
							// }
							// ))
                            // this.pay_name = "",
                            // this.pay_mobile = "",
                            // this.pay_email = "";
                            // var i = localStorage.getItem("coem.cashfree_pay_name");
                            // null != i && i.length > 0 ? this.cashfree_autofill_enabled = !0 : this.cashfree_autofill_enabled = !1,
                            // this.cashfree_dialog = !0
                        } else if ("upi" == e) {
                            this.dialog = !0;
                            var turl = this.channels[this.selected_payment_index].payUrl;
                            location.href = turl+"&coin="+t+"&payid="+d;
                        } else if ("MYEPAYWEB" == e) {
                            this.pay_name = "",
                            this.pay_mobile = "",
                            this.pay_email = "";
                            var n = localStorage.getItem("coem.myepay_pay_name");
                            null != n && n.length > 0 ? this.myepay_autofill_enabled = !0 : this.myepay_autofill_enabled = !1,
                            this.myepay_dialog = !0
                        } else if ("ka" == e) {
                            this.pay_name = "",
                            this.pay_mobile = "",
                            this.pay_email = "";
                            var o = localStorage.getItem("coem.common_info_pay_name");
                            null != o && o.length > 0 ? this.common_info_autofill_enabled = !0 : this.common_info_autofill_enabled = !1,
                            this.common_info_dialog = !0
                        } else if ("qrcode" == e) {
                            this.dialog = !0;
							var ss = "client=web&ver=&token=" + localStorage.getItem("coem.token")+"&payid="+d+"&coin="+t;
                            tt.get(this, "/deposit/getQRcode?"+ss, !0, (function(t, e) {
                                0 == e.data.result,
                                window.open(e.data.data.qr);
                            }
                            ))
                        }
                    }
                },
                selectPayment: function(t) {
                    this.selected_payment_index = t,
                    this.show_payments(this.channels)
                },
                selectAmount: function(t, e) {
                    document.getElementsByName("amountButton").forEach((function(t) {
                        t.className = "v-btn theme--light"
                    }
                    )),
                    t.currentTarget.className = "v-btn theme--light info",
                    this.price = e
                },
                loadProfile: function() {
                    var t = localStorage.getItem("coem.token")
                      , e = this
                      , a = this.$store.state.svrUrl
                      , i = a + "/ajax/balance";
                    // this.$ajax.put(i, {
                    //     // headers: {
                    //     //     Authorization: "Token " + t
                    //     // }
                    // }).then((function(t) {
                    //     var a = t.data.entry;
                    //     e.balance = e.$t("main.currency_symbol") + " " + a.balance.toFixed(2)
                    // }
                    // )).catch((function(t) {
                    //     console.log(t)
                    // }
                    // ))
					var ss = "client=web&ver=&token=" + localStorage.getItem("coem.token");
					tt.post(this, "/ajax/balance", ss, !0, (function(t, e) {
						if(9 == e.data.result)
						{
							localStorage.removeItem("coem.token");
							// e.$store.state.accessToken = null;
							location.href = "/#/login";
						}
					    t.dialog = !1;
					    var a = e.data;
					    0 == a.result ? t.balance = t.$t("main.currency_symbol") + " " + (a.data.balance*1).toFixed(2) : t.alertError(a.msg)
					}
					))
                },
                load_channels: function() {
                    // tt.get(this, "/user/channels?type=pay", !0, (function(t, e) {
                    //     200 == e.data.code && (t.channels = e.data.queryset,
                    //     t.show_payments(t.channels),
                    //     t.amounts = e.data.recharge_prices.split(","))
                    // }
                    // ))
					var ss = "payType=online&client=web&ver=&token=" + localStorage.getItem("coem.token");
					tt.post(this, "/ajax/getDepositByType", ss, !0, (function(t, e) {
						if(9 == e.data.result)
						{
							localStorage.removeItem("coem.token");
							location.href = "/#/login";
						}
					    t.dialog = !1;
					    var a = e.data;
					    if(0 == a.result){
							t.channels = a.data;
							t.infos = a.data2;
							t.show_payments(a.data);
							for(var qq = 0; qq < a.data.length; qq++)
							{
								if(a.data[qq].type == "bank")
								{
									t.$bankname = a.data[qq].bankName;
									t.transfer_bankcode = t.$bankname;
									t.$accountnumber = a.data[qq].accountCode;
									t.transfer_accountnumber = t.$accountnumber;
									t.$bankid = a.data[qq].id;
								}
							}
							
							// ,t.amounts = e.data.recharge_prices.split(","))
				// 			t.amounts = [100,200,300,500,1000,2000,3000,4000,5000,8000,10000,30000,50000];
				            t.amounts = a.data2;
						}else{
							t.alertError(a.msg);
						}
					}
					))
                },
                show_payments: function(t) {
                    var e = [];
                    for (var a in t) {
                        var i = t[a]
                          , n = "";
                        a == this.selected_payment_index && (n = "done",
                        this.selected_channel_name = i.title),
                        e.push({
                            icon: n,
							payid: i.id,
                            title: i.title
                        })
                    }
                    this.payments = e
                },
                mobile_number_focus: function() {
                    // 0 == this.pay_mobile.length && ("vi" == this.$i18n.locale ? this.pay_mobile = "+84" : "in" == this.$i18n.locale && (this.pay_mobile = "+91"))
					0 == this.pay_mobile.length && ((this.pay_mobile = "+91"))
                }
            },
            created: function() {
                this.loadProfile(),
                this.load_channels()
            },
            data: function() {
                return {
                    common_info_dialog: !1,
                    common_info_autofill_enabled: !1,
                    current_pay_key: "",
                    myepay_autofill_enabled: !1,
                    myepay_dialog: !1,
                    upi_autofill_enabled: !1,
                    upi_dialog: !1,
                    cashfree_autofill_enabled: !1,
                    cashfree_dialog: !1,
                    selected_channel_name: "",
                    recharge_commit: !1,
                    result_dialog: !1,
                    result_title: "",
                    result_content: "",
                    dialog: !1,
                    pay_name: "",
                    pay_mobile: "",
                    pay_email: "",
                    pay_upi: "",
					transfer_bankcode: t.$bankname,
					transfer_accountnumber: t.$accountnumber,
                    selected_payment_index: 0,
                    balance: "Loading",
                    amounts: [],
                    price: "",
                    channels: [],
                    payments: []
                }
            }
        })
          , Re = Be
          , We = Object(d["a"])(Re, Ee, ze, !1, null, null, null)
          , Oe = We.exports;
        u()(We, {
            VBtn: m["a"],
            VCard: v["a"],
            VCardActions: it["a"],
            VCardText: it["b"],
            VCardTitle: nt["a"],
            VContainer: rt["a"],
            VDialog: lt["a"],
            VFlex: ct["a"],
            VIcon: h["a"],
            VLayout: g["a"],
            VList: B["a"],
            VListTile: R["a"],
            VListTileAction: W["a"],
            VListTileContent: N["b"],
            VListTileTitle: N["d"],
            VProgressLinear: Ut["a"],
            VSpacer: M["a"],
            VSubheader: qe["a"],
            VTextField: ft["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var Ne = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.$t("my.bank_card")))]), a("v-spacer"), a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.addBankCard()
                    }
                }
            }, [a("v-icon", [t._v("add")])], 1)], 1), [a("v-layout", {
                attrs: {
                    row: ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: "",
                    sm6: "",
                    "offset-sm3": ""
                }
            }, [a("v-card", [a("v-list", {
                attrs: {
                    "two-line": "",
                    subheader: ""
                }
            }, t._l(t.bank_cards, (function(e) {
                return a("v-list-tile", {
                    key: e.title,
                    attrs: {
                        avatar: ""
                    }
                }, [a("v-list-tile-avatar", [a("v-icon", {
                    staticClass: "grey lighten-1 white--text"
                }, [t._v(t._s(e.icon))])], 1), a("v-list-tile-content", [a("v-list-tile-title", [t._v(t._s(e.title))]), a("v-list-tile-sub-title", [t._v(t._s(e.subtitle))])], 1), a("v-list-tile-action", [a("v-btn", {
                    attrs: {
                        icon: "",
                        ripple: ""
                    },
                    on: {
                        click: function(a) {
                            return t.infoClick(e.id, e.title, e.subtitle)
                        }
                    }
                }, [a("v-icon", {
                    attrs: {
                        color: "grey lighten-1"
                    }
                }, [t._v("info")])], 1)], 1)], 1)
            }
            )), 1)], 1)], 1)], 1)], a("div", {
                staticClass: "text-xs-center"
            }, [a("v-bottom-sheet", {
                model: {
                    value: t.sheet,
                    callback: function(e) {
                        t.sheet = e
                    },
                    expression: "sheet"
                }
            }, [a("v-list", [a("v-subheader", [t._v("Select")]), t._l(t.tiles, (function(e) {
                return a("v-list-tile", {
                    key: e.title,
                    on: {
                        click: function(a) {
                            return t.sheetAction(e.key)
                        }
                    }
                }, [a("v-list-tile-avatar", [a("v-avatar", {
                    attrs: {
                        size: "32px",
                        tile: ""
                    }
                }, [a("v-icon", [t._v(t._s(e.icon))])], 1)], 1), a("v-list-tile-title", [t._v(t._s(e.title))])], 1)
            }
            ))], 2)], 1)], 1), a("v-layout", {
                attrs: {
                    row: "",
                    "justify-center": ""
                }
            }, [a("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "290"
                },
                model: {
                    value: t.delete_dialog,
                    callback: function(e) {
                        t.delete_dialog = e
                    },
                    expression: "delete_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline"
            }, [t._v(t._s(t.$t("main.confirm")))]), a("v-card-text", [t._v(t._s(t.$t("msg.do_delete_bank_card")) + " " + t._s(t.will_delete_bank_card_text))]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "grey darken-2",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        t.delete_dialog = !1
                    }
                }
            }, [t._v(t._s(t.$t("main.cancel")))]), a("v-btn", {
                attrs: {
                    color: "red darken-1",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        return t.delete_bank_card()
                    }
                }
            }, [t._v(t._s(t.$t("main.delete")))])], 1)], 1)], 1)], 1)], 2)
        }
          , Ue = []
          , Me = {
            methods: {
                back: function() {
                    history.go(-1)
                },
                addBankCard: function() {
                    this.$router.push("/editBankCard")
                },
                infoClick: function(t, e, a) {
                    this.active_item_id = t,
                    this.sheet = !0,
                    this.will_delete_bank_card_text = e + " " + a
                },
                sheetAction: function(t) {
                    this.sheet = !1,
                    "edit" == t ? this.$router.push("/editBankCard?id=" + this.active_item_id) : "delete" == t && (this.delete_dialog = !0)
                },
                delete_bank_card: function() {
                    this.delete_dialog = !1;
                    var t = localStorage.getItem("coem.token")
                      , e = this
                      , a = this.$store.state.svrUrl
                      , i = a + "/secure/delBoundBank?client=web&ver=&token=" + localStorage.getItem("coem.token") + "&id="+e.active_item_id;
                    this.$ajax.get(i, {
                        // headers: {
                        //     Authorization: "Token " + t
                        // }
                    }).then((function(t) {
						if(9 == t.data.result)
						{
							localStorage.removeItem("coem.token");
							// e.$store.state.accessToken = null;
							location.href = "/#/login";
						}
                        var a = t.data;
                        0 == a.result && e.loadBankCards()
                    }
                    )).catch((function(t) {}
                    ))
                },
                loadBankCards: function() {
                    var t = localStorage.getItem("coem.token")
                      , e = this
                      , a = this.$store.state.svrUrl
                      , i = a + "/ajax/wdbankList?client=web&ver=&token=" + localStorage.getItem("coem.token") + "&page=1&page_size=10";
                    this.$ajax.get(i, {
                        // headers: {
                        //     Authorization: "Token " + t
                        // }
                    }).then((function(t) {
                        var a = t.data.data
                          , i = [];
                        for (var n in a) {
                            var o = a[n];
                            i.push({
                                id: o.id,
                                icon: "payment",
                                title: o.realname,
                                subtitle: o.account
                            })
                        }
                        e.bank_cards = i
                    }
                    )).catch((function(t) {
                        console.log(t),
                        t.response && 401 == t.response.status && (localStorage.removeItem("coem.token"),
                        e.$store.state.accessToken = null,
                        location.href = "/#/login")
                    }
                    ));
                    var s = this.$store.state.svrUrl
                      , r = s + "/ajax/getBankList?client=web&ver=&status=&token=" + localStorage.getItem("coem.token") + "&page=1&page_size=200";
                    this.$ajax.get(r, {
                        // headers: {
                        //     Authorization: "Token " + i
                        // }
                    }).then((function(t1) {
						if(9 == t1.data.result)
						{
							localStorage.removeItem("coem.token");
							// e.$store.state.accessToken = null;
							location.href = "/#/login";
						}
                        if (o.my_guess_table_loading = !1,
                        0 == t1.data.result) {
                            var a = t1.data.data;
                            localStorage.setItem("coem.banklist",JSON.stringify(a));
                        }
                    }
                    )).catch((function(t) {
                        o.my_guess_table_loading = !1,
                        console.log(t),
                        t.response && 401 == t.response.status && (localStorage.removeItem("coem.token"),
                        o.$store.state.accessToken = null,
                        location.href = "/#/login")
                    }
                    ))
                }
            },
            created: function() {
                this.loadBankCards()
            },
            data: function() {
                return {
                    will_delete_bank_card_text: "",
                    delete_dialog: !1,
                    tab: null,
                    bank_cards: [],
                    sheet: !1,
                    active_item_id: null,
                    tiles: [{
                        key: "edit",
                        icon: "create",
                        title: this.$t("main.edit")
                    }, 
                    // {
                        // key: "delete",
                        // icon: "delete",
                        // title: this.$t("main.delete")
                    // }
                    ]
                }
            }
        }
          , Fe = Me
          , Ge = Object(d["a"])(Fe, Ne, Ue, !1, null, null, null)
          , He = Ge.exports;
        u()(Ge, {
            VAvatar: E["a"],
            VBottomSheet: De["a"],
            VBtn: m["a"],
            VCard: v["a"],
            VCardActions: it["a"],
            VCardText: it["b"],
            VCardTitle: nt["a"],
            VDialog: lt["a"],
            VFlex: ct["a"],
            VIcon: h["a"],
            VLayout: g["a"],
            VList: B["a"],
            VListTile: R["a"],
            VListTileAction: W["a"],
            VListTileAvatar: O["a"],
            VListTileContent: N["b"],
            VListTileSubTitle: N["c"],
            VListTileTitle: N["d"],
            VSpacer: M["a"],
            VSubheader: qe["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var Ke = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.title))]), a("v-spacer")], 1), a("v-alert", {
                ref: "alert_div",
                attrs: {
                    value: t.alert_show,
                    type: "error",
                    transition: "scale-transition",
                    dismissible: ""
                },
                domProps: {
                    textContent: t._s(t.alert_text)
                }
            }), a("form", {
                staticStyle: {
                    padding: "24px"
                },
                attrs: {
                    action: "javascript:;",
                    "lazy-validation": ""
                }
            }, [a("v-text-field", {
                attrs: {
                    color: "teal",
                    label: t.$t("my.actual_name"),
                    clearable: "",
                    required: "",
                    disabled: t.dialog
                },
                model: {
                    value: t.actual_name,
                    callback: function(e) {
                        t.actual_name = e
                    },
                    expression: "actual_name"
                }
            }), "en" == t.$i18n.locale ? a("v-text-field", {
                attrs: {
                    color: "teal",
                    label: t.$t("my.ifsc_code"),
                    clearable: "",
                    required: "",
                    disabled: t.dialog
                },
                model: {
                    value: t.ifsc_code,
                    callback: function(e) {
                        t.ifsc_code = e
                    },
                    expression: "ifsc_code"
                }
            }) : t._e(), 
			// a("v-text-field", {
   //              attrs: {
   //                  color: "teal",
   //                  label: t.$t("my.bank_name"),
   //                  clearable: "",
   //                  required: "",
   //                  disabled: t.dialog
   //              },
   //              model: {
   //                  value: t.bank_name,
   //                  callback: function(e) {
   //                      t.bank_name = e
   //                  },
   //                  expression: "bank_name"
   //              }
   //          }),
			[a("v-select", {
                attrs: {
                    "menu-props": {
                        maxHeight: "360"
                    },
                    color: "teal",
                    items: t.items,
                    label: t.$t("my.bank_name"),
                    required: "",
                    disabled: t.dialog
                },
                model: {
                    value: t.selected_item,
                    callback: function(e) {
                        t.selected_item = e
						for (var i = 0; i < t.types.length; i++) {
						  if (t.types[i].name == e) {
						    t.selected_itemid = t.types[i].id;
							break;
						  }
						}
                    },
                    expression: "selected_item"
                }
            })], a("v-text-field", {
                attrs: {
                    color: "teal",
                    label: t.$t("my.account_number"),
                    clearable: "",
                    required: "",
                    disabled: t.dialog
                },
                model: {
                    value: t.account_number,
                    callback: function(e) {
                        t.account_number = e
                    },
                    expression: "account_number"
                }
            }), a("v-text-field", {
                attrs: {
                    color: "teal",
                    label: t.$t("my.upi"),
                    clearable: "",
                    required: "",
                    disabled: t.dialog
                },
                model: {
                    value: t.upi,
                    callback: function(e) {
                        t.upi = e
                    },
                    expression: "upi"
                }
            })
			// , a("v-text-field", {
   //              attrs: {
   //                  color: "teal",
   //                  label: t.$t("my.state_territory"),
   //                  clearable: "",
   //                  required: "",
   //                  disabled: t.dialog
   //              },
   //              model: {
   //                  value: t.province,
   //                  callback: function(e) {
   //                      t.province = e
   //                  },
   //                  expression: "province"
   //              }
   //          }), a("v-text-field", {
   //              attrs: {
   //                  color: "teal",
   //                  label: t.$t("my.city"),
   //                  clearable: "",
   //                  required: "",
   //                  disabled: t.dialog
   //              },
   //              model: {
   //                  value: t.city,
   //                  callback: function(e) {
   //                      t.city = e
   //                  },
   //                  expression: "city"
   //              }
   //          }), a("v-text-field", {
   //              attrs: {
   //                  color: "teal",
   //                  label: t.$t("my.address"),
   //                  clearable: "",
   //                  required: "",
   //                  disabled: t.dialog
   //              },
   //              model: {
   //                  value: t.address,
   //                  callback: function(e) {
   //                      t.address = e
   //                  },
   //                  expression: "address"
   //              }
   //          })
			// , a("v-text-field", {
   //              attrs: {
   //                  color: "teal",
   //                  label: t.$t("my.mobile_number"),
   //                  clearable: "",
   //                  required: "",
   //                  disabled: t.dialog
   //              },
   //              on: {
   //                  focus: function(e) {
   //                      return t.mobile_number_focus()
   //                  }
   //              },
   //              model: {
   //                  value: t.mobile_number,
   //                  callback: function(e) {
   //                      t.mobile_number = e
   //                  },
   //                  expression: "mobile_number"
   //              }
   //          }), a("v-text-field", {
   //              attrs: {
   //                  color: "teal",
   //                  label: t.$t("my.email"),
   //                  clearable: "",
   //                  required: "",
   //                  disabled: t.dialog,
   //                  rules: t.emailRules
   //              },
   //              model: {
   //                  value: t.email,
   //                  callback: function(e) {
   //                      t.email = e
   //                  },
   //                  expression: "email"
   //              }
   //          })
			, a("div", {
                staticClass: "text-xs-center"
            }, [a("v-btn", {
                staticStyle: {
                    width: "240px",
                    color: "white",
                    height: "44px",
                    "text-transform": "none"
                },
                attrs: {
                    color: "teal",
                    required: "",
                    disabled: t.dialog,
                    type: "submit"
                },
                on: {
                    click: function(e) {
                        return t.continueEdit()
                    }
                }
            }, [t._v(t._s(t.$t("main.continue")) + "\n      ")])], 1)], 1), a("v-dialog", {
                attrs: {
                    "hide-overlay": "",
                    persistent: "",
                    width: "300"
                },
                model: {
                    value: t.dialog,
                    callback: function(e) {
                        t.dialog = e
                    },
                    expression: "dialog"
                }
            }, [a("v-card", {
                attrs: {
                    color: "teal",
                    dark: ""
                }
            }, [a("v-card-text", [t._v("\n        " + t._s(t.$t("main.loading")) + "\n        "), a("v-progress-linear", {
                staticClass: "mb-0",
                attrs: {
                    indeterminate: "",
                    color: "white"
                }
            })], 1)], 1)], 1), a("v-layout", {
                attrs: {
                    row: "",
                    "justify-center": ""
                }
            }, [a("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "290"
                },
                model: {
                    value: t.edit_result_dialog,
                    callback: function(e) {
                        t.edit_result_dialog = e
                    },
                    expression: "edit_result_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline"
            }, [t._v(t._s(t.$t("main.completed")))]), a("v-card-text", [t._v(t._s(t.$t("msg.bank_card_saved")))]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [t._v(t._s(t.$t("main.ok")))])], 1)], 1)], 1)], 1)], 1)
        }
          , Je = []
          , Qe = {
            methods: {
                back: function() {
                    history.go(-1)
                },
                alertError: function(t) {
                    this.alert_text = t,
                    this.alert_show = !0;
                    var e = this;
                    setTimeout((function() {
                        e.alert_show = !1
                    }
                    ), 8e3)
                },
                mobile_number_focus: function() {
                    // 0 == this.mobile_number.length && ("vi" == this.$i18n.locale ? this.mobile_number = "+84" : "in" == this.$i18n.locale && (this.mobile_number = "+91"))
					0 == this.mobile_number.length && ((this.mobile_number = "+91"))
                },
                loadBankCard: function() {
                    var t = localStorage.getItem("coem.token")
                      , e = this
                      , a = this.$store.state.svrUrl
                      , i = a + "/ajax/getWdbank?client=web&ver=&token=" + localStorage.getItem("coem.token") + "&id=" + this.request_id;
                    this.$ajax.get(i, {
                        // headers: {
                        //     Authorization: "Token " + t
                        // }
                    }).then((function(t) {
                        var a = t.data.data;
						var selected_item = "";
						for(var s = 0; s < e.types.length; s++)
						{
							if(e.types[s].id == a.bank_code)
							{
								selected_item = e.types[s].name;
								break;
							}
						}
                        e.actual_name = a.realname,
                        e.ifsc_code = a.ifsc,
                        e.selected_item = selected_item,
						e.selected_itemid = a.bank_code,
                        e.account_number = a.account,
                        e.upi = a.upi,
                        e.province = a.province,
                        e.city = a.city,
                        e.address = a.address,
                        e.mobile_number = a.mobile_number,
                        e.email = a.email
                    }
                    )).catch((function(t) {
                        console.log(t),
                        t.response && 401 == t.response.status && (localStorage.removeItem("coem.token"),
                        e.$store.state.accessToken = null,
                        location.href = "/#/login")
                    }
                    ))
                },
                continueEdit: function() {
                    this.dialog = !0,
                    "vi" == this.$i18n.locale && (this.ifsc_code = "None");
                    var t = {
                        id: this.request_id,
                        actual_name: this.actual_name,
                        ifsc_code: this.ifsc_code,
                        bank_name: this.bank_name,
                        account_number: this.account_number,
                        province: this.province,
                        city: this.city,
                        address: this.address,
                        mobile_number: this.mobile_number,
                        email: this.email
                    };
					t = "client=web&ver=&token=" + localStorage.getItem("coem.token") + "&id="+this.request_id+"&name_real="+this.actual_name+"&bank_code="+this.selected_item+"&bank_name="+this.selected_item+"&bank_account="+this.account_number;
                    t = "client=web&ver=&token=" + localStorage.getItem("coem.token") + "&name_real="+this.actual_name+"&bank_code="+this.selected_itemid+"&bank_account="+this.account_number+"&ifsc="+this.ifsc_code+"&upi="+this.upi;
					tt.post(this, "/secure/bankBound", t, !0, (function(t, e) {
						if(9 == e.data.result)
						{
							localStorage.removeItem("coem.token");
							// e.$store.state.accessToken = null;
							location.href = "/#/login";
						}
                        t.dialog = !1;
                        var a = e.data;
                        0 == a.result ? t.edit_result_dialog = !0 : t.alertError(a.msg)
                    }
                    ))
                }
            },
            created: function() {
                this.request_id = this.$route.query.id,
                this.request_id ? (this.title = this.$t("my.edit_bank_card"),
                this.loadBankCard()) : this.title = this.$t("my.add_bank_card")
            },
            data: function() {
                var t = this;
                var banklist = JSON.parse(localStorage.getItem("coem.banklist"));
                var itemss = new Array(banklist.length).fill('');
				var itemsss = new Array(banklist.length).fill('');
                for(var i = 0; i < banklist.length; i++)
                {
                    itemss[i] = banklist[i].name;
					itemsss[i] = banklist[i];
                }
                return {
                    emailRules: [function(e) {
                        return !!e || t.$t("my.email_required")
                    }
                    , function(e) {
                        return /.+@.+/.test(e) || t.$t("my.email_must_valid")
                    }
                    ],
                    alert_show: !1,
                    alert_text: "",
                    dialog: !1,
                    edit_result_dialog: !1,
                    actual_name: "",
                    ifsc_code: "",
                    bank_name: "",
                    account_number: "",
                    province: "",
                    city: "",
                    address: "",
                    mobile_number: "",
                    email: "",
                    request_id: null,
                    types: itemsss,
                    selected_item: null,
                    items: itemss,
                    title: ""
                }
            }
        }
          , Xe = Qe
          , Ze = Object(d["a"])(Xe, Ke, Je, !1, null, null, null)
          , ta = Ze.exports;
        u()(Ze, {
            VAlert: le["a"],
            VBtn: m["a"],
            VCard: v["a"],
            VCardActions: it["a"],
            VCardText: it["b"],
            VCardTitle: nt["a"],
            VDialog: lt["a"],
            VIcon: h["a"],
            VLayout: g["a"],
            VProgressLinear: Ut["a"],
            VSpacer: M["a"],
            VTextField: ft["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var ea = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.$t("my.address")))]), a("v-spacer"), a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.addAddress()
                    }
                }
            }, [a("v-icon", [t._v("add")])], 1)], 1), [a("v-layout", {
                attrs: {
                    row: ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: "",
                    sm6: "",
                    "offset-sm3": ""
                }
            }, [a("v-card", [a("v-list", {
                attrs: {
                    "two-line": "",
                    subheader: ""
                }
            }, t._l(t.addresses, (function(e) {
                return a("v-list-tile", {
                    key: e.title,
                    attrs: {
                        avatar: ""
                    }
                }, [a("v-list-tile-avatar", [a("v-icon", {
                    staticClass: "grey lighten-1 white--text"
                }, [t._v(t._s(e.icon))])], 1), a("v-list-tile-content", [a("v-list-tile-title", [t._v(t._s(e.title))]), a("v-list-tile-sub-title", [t._v(t._s(e.subtitle))])], 1), a("v-list-tile-action", [a("v-btn", {
                    attrs: {
                        icon: "",
                        ripple: ""
                    },
                    on: {
                        click: function(a) {
                            return t.infoClick(e.id, e.title, e.subtitle)
                        }
                    }
                }, [a("v-icon", {
                    attrs: {
                        color: "grey lighten-1"
                    }
                }, [t._v("info")])], 1)], 1)], 1)
            }
            )), 1)], 1)], 1)], 1)], a("div", {
                staticClass: "text-xs-center"
            }, [a("v-bottom-sheet", {
                model: {
                    value: t.sheet,
                    callback: function(e) {
                        t.sheet = e
                    },
                    expression: "sheet"
                }
            }, [a("v-list", [a("v-subheader", [t._v("Select")]), t._l(t.tiles, (function(e) {
                return a("v-list-tile", {
                    key: e.title,
                    on: {
                        click: function(a) {
                            return t.sheetAction(e.key)
                        }
                    }
                }, [a("v-list-tile-avatar", [a("v-avatar", {
                    attrs: {
                        size: "32px",
                        tile: ""
                    }
                }, [a("v-icon", [t._v(t._s(e.icon))])], 1)], 1), a("v-list-tile-title", [t._v(t._s(e.title))])], 1)
            }
            ))], 2)], 1)], 1), a("v-layout", {
                attrs: {
                    row: "",
                    "justify-center": ""
                }
            }, [a("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "290"
                },
                model: {
                    value: t.delete_dialog,
                    callback: function(e) {
                        t.delete_dialog = e
                    },
                    expression: "delete_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline"
            }, [t._v(t._s(t.$t("main.confirm")))]), a("v-card-text", [t._v(t._s(t.$t("msg.do_delete_address")) + " " + t._s(t.will_delete_address_text))]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "grey darken-2",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        t.delete_dialog = !1
                    }
                }
            }, [t._v(t._s(t.$t("main.cancel")))]), a("v-btn", {
                attrs: {
                    color: "red darken-1",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        return t.delete_address()
                    }
                }
            }, [t._v(t._s(t.$t("main.delete")))])], 1)], 1)], 1)], 1)], 2)
        }
          , aa = []
          , ia = {
            methods: {
                back: function() {
                    history.go(-1)
                },
                addAddress: function() {
                    this.$router.push("/editAddress")
                },
                infoClick: function(t, e, a) {
                    this.active_item_id = t,
                    this.sheet = !0,
                    this.will_delete_address_text = e + " " + a
                },
                sheetAction: function(t) {
                    this.sheet = !1,
                    "edit" == t ? this.$router.push("/editAddress?id=" + this.active_item_id) : "delete" == t && (this.delete_dialog = !0)
                },
                delete_address: function() {
                    this.delete_dialog = !1;
                    var t = localStorage.getItem("coem.token")
                      , e = this
                      , a = this.$store.state.svrUrl
                      , i = a + "/user/delete_address";
                    this.$ajax.put(i, {
                        id: e.active_item_id
                    }, {
                        // headers: {
                        //     Authorization: "Token " + t
                        // }
                    }).then((function(t) {
                        var a = t.data;
                        200 == a.code && e.loadAddresses()
                    }
                    )).catch((function(t) {}
                    ))
                },
                loadAddresses: function() {
                    var t = localStorage.getItem("coem.token")
                      , e = this
                      , a = this.$store.state.svrUrl
                      , i = a + "/user/addresses";
                    this.$ajax.get(i, {
                        // headers: {
                        //     Authorization: "Token " + t
                        // }
                    }).then((function(t) {
                        var a = t.data.queryset
                          , i = [];
                        for (var n in a) {
                            var o = a[n];
                            i.push({
                                id: o.id,
                                icon: "apartment",
                                title: o.full_name + " " + o.mobile_number,
                                subtitle: o.detail_address + ", " + o.town_city + ", " + o.state + " - " + o.pin_code
                            })
                        }
                        e.addresses = i
                    }
                    )).catch((function(t) {
                        console.log(t),
                        t.response && 401 == t.response.status && (localStorage.removeItem("coem.token"),
                        e.$store.state.accessToken = null,
                        location.href = "/#/login")
                    }
                    ))
                }
            },
            created: function() {
                this.loadAddresses()
            },
            data: function() {
                return {
                    will_delete_address_text: "",
                    delete_dialog: !1,
                    tab: null,
                    addresses: [],
                    sheet: !1,
                    active_item_id: null,
                    tiles: [{
                        key: "edit",
                        icon: "create",
                        title: this.$t("main.edit")
                    }, {
                        key: "delete",
                        icon: "delete",
                        title: this.$t("main.delete")
                    }]
                }
            }
        }
          , na = ia
          , oa = Object(d["a"])(na, ea, aa, !1, null, null, null)
          , sa = oa.exports;
        u()(oa, {
            VAvatar: E["a"],
            VBottomSheet: De["a"],
            VBtn: m["a"],
            VCard: v["a"],
            VCardActions: it["a"],
            VCardText: it["b"],
            VCardTitle: nt["a"],
            VDialog: lt["a"],
            VFlex: ct["a"],
            VIcon: h["a"],
            VLayout: g["a"],
            VList: B["a"],
            VListTile: R["a"],
            VListTileAction: W["a"],
            VListTileAvatar: O["a"],
            VListTileContent: N["b"],
            VListTileSubTitle: N["c"],
            VListTileTitle: N["d"],
            VSpacer: M["a"],
            VSubheader: qe["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var ra = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.title))]), a("v-spacer")], 1), a("v-alert", {
                ref: "alert_div",
                attrs: {
                    value: t.alert_show,
                    type: "error",
                    transition: "scale-transition",
                    dismissible: ""
                },
                domProps: {
                    textContent: t._s(t.alert_text)
                }
            }), a("form", {
                staticStyle: {
                    padding: "24px"
                },
                attrs: {
                    action: "javascript:;"
                }
            }, [a("v-text-field", {
                attrs: {
                    label: t.$t("my.full_name"),
                    clearable: "",
                    required: "",
                    color: "teal",
                    disabled: t.dialog
                },
                model: {
                    value: t.full_name,
                    callback: function(e) {
                        t.full_name = e
                    },
                    expression: "full_name"
                }
            }), a("v-text-field", {
                attrs: {
                    label: t.$t("my.mobile_number"),
                    clearable: "",
                    required: "",
                    disabled: t.dialog,
                    color: "teal"
                },
                on: {
                    focus: function(e) {
                        return t.mobile_number_focus()
                    }
                },
                model: {
                    value: t.mobile_number,
                    callback: function(e) {
                        t.mobile_number = e
                    },
                    expression: "mobile_number"
                }
            }), a("v-text-field", {
                attrs: {
                    label: t.$t("my.pin_code"),
                    clearable: "",
                    required: "",
                    disabled: t.dialog,
                    color: "teal"
                },
                model: {
                    value: t.pin_code,
                    callback: function(e) {
                        t.pin_code = e
                    },
                    expression: "pin_code"
                }
            }), a("v-text-field", {
                attrs: {
                    label: t.$t("my.state"),
                    clearable: "",
                    required: "",
                    disabled: t.dialog,
                    color: "teal"
                },
                model: {
                    value: t.state,
                    callback: function(e) {
                        t.state = e
                    },
                    expression: "state"
                }
            }), a("v-text-field", {
                attrs: {
                    label: t.$t("my.town_city"),
                    clearable: "",
                    required: "",
                    color: "teal",
                    disabled: t.dialog
                },
                model: {
                    value: t.town_city,
                    callback: function(e) {
                        t.town_city = e
                    },
                    expression: "town_city"
                }
            }), a("v-textarea", {
                attrs: {
                    label: t.$t("my.detail_address"),
                    required: "",
                    color: "teal"
                },
                model: {
                    value: t.detail_address,
                    callback: function(e) {
                        t.detail_address = e
                    },
                    expression: "detail_address"
                }
            }), a("div", {
                staticClass: "text-xs-center"
            }, [a("v-btn", {
                staticStyle: {
                    width: "240px",
                    color: "white",
                    height: "44px",
                    "text-transform": "none"
                },
                attrs: {
                    color: "teal",
                    type: "submit",
                    disabled: t.dialog
                },
                on: {
                    click: function(e) {
                        return t.continueEdit()
                    }
                }
            }, [t._v(t._s(t.$t("main.continue")) + "\n      ")])], 1)], 1), a("v-dialog", {
                attrs: {
                    "hide-overlay": "",
                    persistent: "",
                    width: "300"
                },
                model: {
                    value: t.dialog,
                    callback: function(e) {
                        t.dialog = e
                    },
                    expression: "dialog"
                }
            }, [a("v-card", {
                attrs: {
                    color: "teal",
                    dark: ""
                }
            }, [a("v-card-text", [t._v("\n        " + t._s(t.$t("main.loading")) + "\n        "), a("v-progress-linear", {
                staticClass: "mb-0",
                attrs: {
                    indeterminate: "",
                    color: "white"
                }
            })], 1)], 1)], 1), a("v-layout", {
                attrs: {
                    row: "",
                    "justify-center": ""
                }
            }, [a("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "290"
                },
                model: {
                    value: t.edit_result_dialog,
                    callback: function(e) {
                        t.edit_result_dialog = e
                    },
                    expression: "edit_result_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline"
            }, [t._v(t._s(t.$t("main.completed")))]), a("v-card-text", [t._v(t._s(t.$t("msg.address_saved")))]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [t._v(t._s(t.$t("main.ok")))])], 1)], 1)], 1)], 1)], 1)
        }
          , la = []
          , ca = {
            methods: {
                back: function() {
                    history.go(-1)
                },
                alertError: function(t) {
                    this.alert_text = t,
                    this.alert_show = !0;
                    var e = this;
                    setTimeout((function() {
                        e.alert_show = !1
                    }
                    ), 8e3)
                },
                mobile_number_focus: function() {
                    // 0 == this.mobile_number.length && ("vi" == this.$i18n.locale ? this.mobile_number = "+84" : "in" == this.$i18n.locale && (this.mobile_number = "+91"))
					0 == this.mobile_number.length && ((this.mobile_number = "+91"))
                },
                loadAddress: function() {
                    var t = localStorage.getItem("coem.token")
                      , e = this
                      , a = this.$store.state.svrUrl
                      , i = a + "/user/address?id=" + this.address_id;
                    this.$ajax.get(i, {
                        // headers: {
                        //     Authorization: "Token " + t
                        // }
                    }).then((function(t) {
                        var a = t.data.entry;
                        e.full_name = a.full_name,
                        e.mobile_number = a.mobile_number,
                        e.pin_code = a.pin_code,
                        e.state = a.state,
                        e.town_city = a.town_city,
                        e.detail_address = a.detail_address
                    }
                    )).catch((function(t) {
                        console.log(t),
                        t.response && 401 == t.response.status && (localStorage.removeItem("coem.token"),
                        e.$store.state.accessToken = null,
                        location.href = "/#/login")
                    }
                    ))
                },
                continueEdit: function() {
                    this.dialog = !0;
                    var t = {
                        id: this.address_id,
                        full_name: this.full_name,
                        mobile_number: this.mobile_number,
                        pin_code: this.pin_code,
                        state: this.state,
                        town_city: this.town_city,
                        detail_address: this.detail_address
                    };
                    tt.post(this, "/user/edit_address", t, !0, (function(t, e) {
                        t.dialog = !1;
                        var a = e.data;
                        200 == a.code ? t.edit_result_dialog = !0 : t.alertError(a.msg)
                    }
                    ))
                }
            },
            created: function() {
                this.address_id = this.$route.query.id,
                this.address_id ? (this.title = this.$t("my.edit_address"),
                this.loadAddress()) : this.title = this.$t("my.add_address")
            },
            data: function() {
                return {
                    alert_show: !1,
                    alert_text: "",
                    dialog: !1,
                    edit_result_dialog: !1,
                    full_name: "",
                    mobile_number: "",
                    pin_code: "",
                    state: "",
                    town_city: "",
                    detail_address: "",
                    address_id: null,
                    title: ""
                }
            }
        }
          , da = ca
          , _a = a("a844")
          , ua = Object(d["a"])(da, ra, la, !1, null, null, null)
          , pa = ua.exports;
        u()(ua, {
            VAlert: le["a"],
            VBtn: m["a"],
            VCard: v["a"],
            VCardActions: it["a"],
            VCardText: it["b"],
            VCardTitle: nt["a"],
            VDialog: lt["a"],
            VIcon: h["a"],
            VLayout: g["a"],
            VProgressLinear: Ut["a"],
            VSpacer: M["a"],
            VTextField: ft["a"],
            VTextarea: _a["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var ma = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v("Privacy Policy")]), a("v-spacer")], 1), a("div", {
                staticClass: "content",
                staticStyle: {
                    padding: "16px"
                }
            }, [a("p", [t._v("This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your\n      information when You use the Service and tells You about Your privacy rights and how the law protects You.")]), a("h1", [t._v("Interpretation and Definitions")]), a("h2", [t._v("Interpretation")]), a("p", [t._v("The words of which the initial letter is capitalized have meanings defined under the following conditions.")]), a("p", [t._v("The following definitions shall have the same meaning regardless of whether they appear in singular or in\n      plural.\n    ")]), a("h2", [t._v("Definitions")]), a("p", [t._v("For the purposes of this Privacy Policy:")]), a("ul", [t._m(0), a("li", [a("p", [a("strong", [t._v("Company")]), t._v(' (referred to as either "the Company", "We", "Us" or "Our" in this Agreement)\n          refers to ' + t._s(t.$store.state.shopName) + ".")])]), t._m(1), t._m(2), a("li", [a("strong", [t._v("Website")]), t._v(" refers to " + t._s(t.$store.state.shopName) + ", accessible from " + t._s(t.$store.state.appUrl))]), t._m(3), t._m(4), t._m(5), t._m(6), t._m(7), t._m(8), t._m(9), t._m(10)]), a("h1", [t._v("Collecting and Using Your Personal Data")]), a("h2", [t._v("Types of Data Collected")]), a("h3", [t._v("Personal Data")]), a("p", [t._v("While using Our Service, We may ask You to provide Us with certain personally identifiable information that can\n      be used to contact or identify You. Personally identifiable information may include, but is not limited to:")]), t._m(11), a("h3", [t._v("Usage Data")]), a("p", [t._v("Usage Data is collected automatically when using the Service.")]), a("p", [t._v("Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser\n      type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent\n      on those pages, unique device identifiers and other diagnostic data.")]), a("p", [t._v("When You access the Service by or through a mobile device, We may collect certain information automatically,\n      including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address\n      of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device\n      identifiers and other diagnostic data.")]), a("p", [t._v("We may also collect information that Your browser sends whenever You visit our Service or when You access the\n      Service by or through a mobile device.")]), a("h3", [t._v("Tracking Technologies and Cookies")]), a("p", [t._v("We use Cookies and similar tracking technologies to track the activity on Our Service and store certain\n      information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to\n      improve and analyze Our Service.")]), a("p", [t._v("You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You\n      do not accept Cookies, You may not be able to use some parts of our Service.")]), a("p", [t._v('Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile\n      device when You go offline, while Session Cookies are deleted as soon as You close your web browser.\n    ')]), a("p", [t._v("We use both session and persistent Cookies for the purposes set out below:")]), t._m(12), a("p", [t._v("For more information about the cookies we use and your choices regarding cookies, please visit our Cookies\n      Policy.")]), a("h2", [t._v("Use of Your Personal Data")]), a("p", [t._v("The Company may use Personal Data for the following purposes:")]), t._m(13), a("p", [t._v("We may share your personal information in the following situations:")]), t._m(14), a("h2", [t._v("Retention of Your Personal Data")]), a("p", [t._v("The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this\n      Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal\n      obligations (for example, if we are required to retain your data to comply with applicable laws), resolve\n      disputes, and enforce our legal agreements and policies.")]), a("p", [t._v("The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a\n      shorter period of time, except when this data is used to strengthen the security or to improve the functionality\n      of Our Service, or We are legally obligated to retain this data for longer time periods.")]), a("h2", [t._v("Transfer of Your Personal Data")]), a("p", [t._v("Your information, including Personal Data, is processed at the Company's operating offices and in any other\n      places where the parties involved in the processing are located. It means that this information may be\n      transferred to — and maintained on — computers located outside of Your state, province, country or other\n      governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.")]), a("p", [t._v("Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement\n      to\n      that transfer.")]), a("p", [t._v("The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in\n      accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or\n      a country unless there are adequate controls in place including the security of Your data and other personal\n      information.")]), a("h2", [t._v("Disclosure of Your Personal Data")]), a("h3", [t._v("Business Transactions")]), a("p", [t._v("If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We\n      will\n      provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.")]), a("h3", [t._v("Law enforcement")]), a("p", [t._v("Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by\n      law or in response to valid requests by public authorities (e.g. a court or a government agency).")]), a("h3", [t._v("Other legal requirements")]), a("p", [t._v("The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:")]), t._m(15), a("h2", [t._v("Security of Your Personal Data")]), a("p", [t._v("The security of Your Personal Data is important to Us, but remember that no method of transmission over the\n      Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means\n      to protect Your Personal Data, We cannot guarantee its absolute security.")]), a("h1", [t._v("Children's Privacy")]), a("p", [t._v("Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable\n      information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child\n      has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data\n      from anyone under the age of 13 without verification of parental consent, We take steps to remove that\n      information from Our servers.")]), a("p", [t._v("If We need to rely on consent as a legal basis for processing Your information and Your country requires\n      consent\n      from a parent, We may require Your parent's consent before We collect and use that information.")]), a("h1", [t._v("Links to Other Websites")]), a("p", [t._v("Our Service may contain links to other websites that are not operated by Us. If You click on a third party\n      link,\n      You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every\n      site You visit.")]), a("p", [t._v("We have no control over and assume no responsibility for the content, privacy policies or practices of any\n      third\n      party sites or services.")]), a("h1", [t._v("Changes to this Privacy Policy")]), a("p", [t._v("We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new\n      Privacy\n      Policy on this page.")]), a("p", [t._v('We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective\n      and update the "Last updated" date at the top of this Privacy Policy.')]), a("p", [t._v("You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are\n      effective when they are posted on this page.")]), a("h1", [t._v("Contact Us")]), a("p", [t._v("If you have any questions about this Privacy Policy, You can contact us:")]), a("ul", [a("li", [t._v("By visiting this page on our website: " + t._s(t.$store.state.appUrl) + "/#/suggestion")])])])], 1)
        }
          , va = [function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("li", [a("p", [a("strong", [t._v("You")]), t._v(" means the individual accessing or using the Service, or the company, or other legal\n          entity on behalf of which such individual is accessing or using the Service, as applicable.")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("li", [a("strong", [t._v("Affiliate")]), t._v(' means an entity that controls, is controlled by or is under common control with a\n        party, where "control" means ownership of 50% or more of the shares, equity interest or other securities\n        entitled to vote for election of directors or other managing authority.\n      ')])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("li", [a("strong", [t._v("Account")]), t._v(" means a unique account created for You to access our Service or parts of our\n        Service.\n      ")])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("li", [a("strong", [t._v("Service")]), t._v(" refers to the Website.")])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("li", [a("strong", [t._v("Country")]), t._v(" refers to: Uttar Pradesh, India")])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("li", [a("p", [a("strong", [t._v("Service Provider")]), t._v(" means any natural or legal person who processes the data on behalf of\n          the Company. It refers to third-party companies or individuals employed by the Company to facilitate the\n          Service, to provide the Service on behalf of the Company, to perform services related to the Service or\n          to assist the Company in analyzing how the Service is used.")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("li", [a("strong", [t._v("Third-party Social Media Service")]), t._v(" refers to any website or any social network website\n        through which a User can log in or create an account to use the Service.\n      ")])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("li", [a("p", [a("strong", [t._v("Personal Data")]), t._v(" is any information that relates to an identified or identifiable\n          individual.")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("li", [a("strong", [t._v("Cookies")]), t._v(" are small files that are placed on Your computer, mobile device or any other device\n        by a website, containing the details of Your browsing history on that website among its many uses.\n      ")])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("li", [a("strong", [t._v("Device")]), t._v(" means any device that can access the Service such as a computer, a cellphone or a\n        digital tablet.\n      ")])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("li", [a("strong", [t._v("Usage Data")]), t._v(" refers to data collected automatically, either generated by the use of the\n        Service or from the Service infrastructure itself (for example, the duration of a page visit).\n      ")])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("ul", [a("li", [t._v("Email address")]), a("li", [t._v("First name and last name")]), a("li", [t._v("Phone number")]), a("li", [t._v("Address, State, Province, ZIP/Postal code, City")]), a("li", [t._v("Usage Data")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("ul", [a("li", [a("p", [a("strong", [t._v("Necessary / Essential Cookies")])]), a("p", [t._v("Type: Session Cookies")]), a("p", [t._v("Administered by: Us")]), a("p", [t._v("Purpose: These Cookies are essential to provide You with services available through the Website and to\n          enable You to use some of its features. They help to authenticate users and prevent fraudulent use of\n          user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We\n          only use these Cookies to provide You with those services.")])]), a("li", [a("p", [a("strong", [t._v("Cookies Policy / Notice Acceptance Cookies")])]), a("p", [t._v("Type: Persistent Cookies")]), a("p", [t._v("Administered by: Us")]), a("p", [t._v("Purpose: These Cookies identify if users have accepted the use of cookies on the Website.")])]), a("li", [a("p", [a("strong", [t._v("Functionality Cookies")])]), a("p", [t._v("Type: Persistent Cookies")]), a("p", [t._v("Administered by: Us")]), a("p", [t._v("Purpose: These Cookies allow us to remember choices You make when You use the Website, such as\n          remembering your login details or language preference. The purpose of these Cookies is to provide You\n          with a more personal experience and to avoid You having to re-enter your preferences every time You use\n          the Website.")])])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("ul", [a("li", [a("strong", [t._v("To provide and maintain our Service")]), t._v(", including to monitor the usage of our Service.")]), a("li", [a("strong", [t._v("To manage Your Account:")]), t._v(" to manage Your registration as a user of the Service. The Personal\n        Data You provide can give You access to different functionalities of the Service that are available to You\n        as a registered user.\n      ")]), a("li", [a("strong", [t._v("For the performance of a contract:")]), t._v(" the development, compliance and undertaking of the\n        purchase contract for the products, items or services You have purchased or of any other contract with Us\n        through the Service.\n      ")]), a("li", [a("strong", [t._v("To contact You:")]), t._v(" To contact You by email, telephone calls, SMS, or other equivalent forms of\n        electronic communication, such as a mobile application's push notifications regarding updates or informative\n        communications related to the functionalities, products or contracted services, including the security\n        updates, when necessary or reasonable for their implementation.\n      ")]), a("li", [a("strong", [t._v("To provide You")]), t._v(" with news, special offers and general information about other goods,\n        services and events which we offer that are similar to those that you have already purchased or enquired\n        about unless You have opted not to receive such information.\n      ")]), a("li", [a("strong", [t._v("To manage Your requests:")]), t._v(" To attend and manage Your requests to Us.")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("ul", [a("li", [a("strong", [t._v("With Service Providers:")]), t._v(" We may share Your personal information with Service Providers to\n        monitor and analyze the use of our Service, to contact You.\n      ")]), a("li", [a("strong", [t._v("For Business transfers:")]), t._v(" We may share or transfer Your personal information in connection\n        with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a\n        portion of our business to another company.\n      ")]), a("li", [a("strong", [t._v("With Affiliates:")]), t._v(" We may share Your information with Our affiliates, in which case we will\n        require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other\n        subsidiaries, joint venture partners or other companies that We control or that are under common control\n        with Us.\n      ")]), a("li", [a("strong", [t._v("With Business partners:")]), t._v(" We may share Your information with Our business partners to offer\n        You certain products, services or promotions.\n      ")]), a("li", [a("strong", [t._v("With other users:")]), t._v(" when You share personal information or otherwise interact in the public\n        areas with other users, such information may be viewed by all users and may be publicly distributed outside.\n        If You interact with other users or register through a Third-Party Social Media Service, Your contacts on\n        the Third-Party Social Media Service may see You name, profile, pictures and description of Your activity.\n        Similarly, other users will be able to view descriptions of Your activity, communicate with You and view\n        Your profile.\n      ")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("ul", [a("li", [t._v("Comply with a legal obligation")]), a("li", [t._v("Protect and defend the rights or property of the Company")]), a("li", [t._v("Prevent or investigate possible wrongdoing in connection with the Service")]), a("li", [t._v("Protect the personal safety of Users of the Service or the public")]), a("li", [t._v("Protect against legal liability")])])
        }
        ]
          , ha = {
            methods: {
                back: function() {
                    history.go(-1)
                }
            }
        }
          , ga = ha
          , fa = Object(d["a"])(ga, ma, va, !1, null, null, null)
          , ya = fa.exports;
        u()(fa, {
            VBtn: m["a"],
            VIcon: h["a"],
            VSpacer: M["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var ba = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v("Risk Disclosure Agreement")]), a("v-spacer")], 1), a("div", {
                staticClass: "content",
                staticStyle: {
                    padding: "12px"
                }
            }, [a("h3", {
                staticClass: "text-xs-center",
                staticStyle: {
                    "margin-bottom": "12px"
                }
            }, [t._v("Chapter 1.Booking/Collection Description")]), a("p", [a("span", [t._v("Prepayment Booking/Recycling Customer should read and understand the business content carefully before making prepayment bookings (prepayment lock price, payment settlement and shipment) /recovery or repurchase (prepayment lock price, shipping payment) before making prepayment bookings to " + t._s(t.$store.state.shopName) + ":")])]), t._m(0), t._m(1), t._m(2), t._m(3), t._m(4), t._m(5), a("p", [a("span", [t._v("5. For further details, please refer to the Business Guidelines in the front page of the mall, Understanding " + t._s(t.$store.state.shopName) + ".")])]), a("br"), a("h3", {
                staticClass: "text-xs-center"
            }, [t._v("Chapter 2 Reveals the business model of " + t._s(t.$store.state.shopName))]), a("br"), a("p", [a("span", [t._v("Booking/repurchase orders, the business model for clearing balance shipments, uncertainties such as potential benefits and potential risks to the value of its merchandise due to real-time fluctuations in the gold and silver market, and the extent to which booking/repo risk stake is understood for customer booking/repo risk, Risk control ability and understanding of related products have high requirements. Customer selects pre-payment booking/repurchase, fully informed on behalf of the customer and understand the risks of prepayments/repurchase business and agree to and accept " + t._s(t.$store.state.shopName) + " current and future relevant booking/repurchase business processes and management systems (collectively, the Process Systems) to develop, modify and publish. This Risk Disclosure (Disclosure) is intended to fully disclose to the Client the risk of the prepayment booking/repurchase business and is intended only to provide reference for the client to assess and determine its own risk tolerance. The risk disclosures described in this disclosure are for example only. All risk factors associated with " + t._s(t.$store.state.shopName) + " Advance Booking/Repurchase are not detailed. Customers should also carefully understand and understand other possible risk factors before starting or participating in " + t._s(t.$store.state.shopName) + " pre-payment booking/repurchase business. If the customer is not aware of or is not aware of this disclosure, they should consult " + t._s(t.$store.state.shopName) + " Customer Service or the relevant regional service provider in a timely manner. If the Customer ultimately clicks on Risk Disclosure, it is deemed that the Customer fully agrees and accepts the full contents of this disclosure.")])]), a("br"), a("p", [t._v("Warm tips")]), a("span", [t._v("1.Minors under the age of 18 are not permitted to participate in The " + t._s(t.$store.state.shopName) + " Advance Booking/Recycling.")]), a("p", [a("span", [t._v("\n          2." + t._s(t.$store.state.shopName) + " Advance Booking/Repo is only available to customers who meet all of the following criteria:\n          "), a("br"), t._v("① Natural persons with full civil capacity, legal persons of enterprises or other economic organizations registered in accordance with the law.\n        ")])]), a("p", [a("span", [t._v("② To fully understand all risks associated with " + t._s(t.$store.state.shopName) + " Advance Booking/Repurchase business and have a certain risk tolerance.")])]), t._m(6), a("p", [a("span", [t._v("A. Policy-related risk disclosure, such as changes in national laws, regulations and policies, contingency measures, implementation of appropriate regulatory measures, " + t._s(t.$store.state.shopName) + " regulatory system and changes in management methods and regulations, etc., all risks that may affect customer bookings/repurchases, etc., the customer must bear the losses incurred.")])]), t._m(7), a("p", [a("span", [t._v("④ " + t._s(t.$store.state.shopName) + " has enabled the provision of services through electronic communication technology and Internet technology. Communication services and hardware and software services are provided by different vendors and may be at risk in terms of quality and stability. Interruptions or delays due to communication or network failures may affect customer prepayment bookings/repurchases. In addition, the customers computer system may be attacked by viruses and/or cyber-hackers, resulting in the customers advance payment booking/repurchase not being properly and/or timely.")])]), a("p", [a("span", [t._v("\n          There is also a risk that the above uncertainties may affect the customer’s advance payment booking/repurchase.\n          "), a("br"), t._v("A. The price quoted by the " + t._s(t.$store.state.shopName) + " Prepayment Booking/Repo System is based on the systems real-time trading price and may differ slightly from the commodity prices in other markets.\n          "), a("br"), t._v(t._s(t.$store.state.shopName) + " cannot guarantee that the above prepayment booking//repurchase price is fully consistent with other markets.\n          "), a("br"), t._v("B. At " + t._s(t.$store.state.shopName) + ";, once the customers pre-payment booking/repurchase application submitted through the online terminal is completed, it cannot be withdrawn and the customer must accept the risks associated with such a subscription.\n          "), a("br"), t._v("C. " + t._s(t.$store.state.shopName) + " prohibits regional service providers and their staff from providing any profit guarantee to customers, from engaging in prepaid bookings/repurchases on behalf of customers, or from sharing profits or risks with customers. Customer should be aware that any profit guarantee or commitment that " + t._s(t.$store.state.shopName) + " advance booking/repurchase does not have a loss, profit share or risk-sharing is impossible, unfounded, and incorrect.\n          "), a("br"), t._v("D. The customers pre-paid booking / repurchase application must be based on the customers own decision. " + t._s(t.$store.state.shopName) + " and regional service providers and employees do not provide booking / buyback to the client, nor does it constitute any commitment if the client makes a booking / buyback decision accordingly.\n          "), a("br"), t._v("E. In advance booking / buyback process, there may be occasional apparent errors in the offer.\n          "), a("br"), t._v("⑤ RISK-AGREEMENT\n          "), a("br"), t._v("Typhoons, floods, fires, wars, disturbances, rule revisions, changes or adjustments in government regulatory policies and regulatory requirements, and electricity, To ensure that you fully understand the relevant provisions and risks of booking / repurchase business, customers should be based on their own booking experience, booking / repurchase / purchase of commodities, read all the contents of the advance booking / repurchase notice carefully, and fully understand and agree to all the contents, I am willing to take all risks to start or participate in " + t._s(t.$store.state.shopName) + ". In case of above mentioned condition I shall be him-self liable to any financial as well as monitory loss. By accepting this I shall be no more eligible to claims any statutory legal benefits given to Indian citizen by Law of India.\n          "), a("br"), a("br")])]), t._m(8), a("br"), a("h3", {
                staticClass: "text-xs-center",
                staticStyle: {
                    "margin-bottom": "12px"
                }
            }, [t._v("Cancellation and refundable Policy")]), t._m(9), t._m(10), t._m(11), t._m(12)])], 1)
        }
          , xa = [function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("p", [a("span", [t._v("1. Before making an appointment/restoring the prepayment business, the customer should complete the real name authentication in the mall and ensure that the name, ID number, bank account number, delivery address and other information filled in are true, accurate and valid; Otherwise, the user will be liable for the consequences of false information.")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("p", [a("span", [t._v("2. Customers can order gold and silver products in advance at the shopping centre. Orders can be cancelled by 01:30 a.m. on the same Saturday. When the customer pays the end payment, the mall receives the final payment and arranges the delivery.")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("p", [a("span", [t._v("If the customer does not pay the final pick-up by 01:30 a.m. on Saturday, the customer is deemed to have made the last offer before the inventory and the booking is cancelled.")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("p", [a("span", [t._v("3. Customers can make an appointment to recycle gold and silver products purchased at the gold point. Pre-purchase recovery requires a credit margin and confirmation of actual possession of gold and silver products purchased from the mall. Customers can cancel their reservation at any time before 01:30 on Saturday and the credit mark will be refunded after deducting the increase or decrease in the value of the goods within the corresponding time.")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("p", [a("span", [t._v("If the customer fails to deliver the goods to a shopping mall or shopping center at the designated collection point by Saturday within the same week, or if the goods delivered do not meet the recycling standard test, the customer will be deemed to have cancelled the reservation recovery and will bear the logistics and testing costs.")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("p", [a("span", [t._v("4. Counting time: Daily 01:30-05:30 for the mall warehouse inventory time. During the inventory period, the mall stops accepting advance payments for reservations/receipts.")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("p", [a("span", [t._v("③ Have a certain understanding of gold and silver and its products:")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("p", [a("span", [t._v("B. Price fluctuations, gold, silver and other precious metals and their accessories are affected by a variety of factors, such as the international economic situation, foreign exchange, related market trends, supply and demand, and political situation and energy prices. The pricing mechanism for gold, silver and other precious metals products is very complex, making it difficult for customers to fully grasp in practice, so decisions such as advance booking/buyback are possible Mistakes, if the risk cannot be effectively controlled, may suffer losses and the customer must bear all the losses incurred as a result.")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("p", [a("span", [t._v("Note: I have carefully read all contents of this app including Privacy Statement, Risk Disclosure Agreement and Risk Agreement and I am agreed to continue with my own risk.")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("p", [a("span", [t._v("In case of any discrepancy we can cancel any of the orders placed by you. A few reasons for cancellation from our end usually include limitation of the product in the inventory, error in pricing, error in product information etc. We also have the right to check out for extra information for the purpose of accepting orders in a few cases. We make sure to notify you if in case your order is cancelled partially or completely or if in case any extra data is required for the purpose of accepting your order.")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("p", [a("span", [t._v("Once you place the order, such order can be cancelled from your end before the shipping is undertaken to the destination. Once the request of cancellation for ready for shipping product is received by us, we make sure to refund the amount through the same mode of payment within 5 working days. Cancellation of the order of Gold coin(exchanged by integrals) shall not be accepted as under Company’s policies.")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("p", [a("span", [t._v("We don’t accept Cancellation requests for Smart Buy orders or customized jewellery orders. In specific situations when the customer wants the money back or wants to exchange it with other products, making charges of the product and stone charges, if there is any stone on the product shall be deducted from the payment and balance will be refunded back to customer account within 5 working days.")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("p", [a("span", [t._v("If in case the amount is deducted from your account and the transaction has failed, the same will be refunded back to your account within 72 hours.")])])
        }
        ]
          , wa = {
            methods: {
                back: function() {
                    history.go(-1)
                }
            }
        }
          , ka = wa
          , Sa = Object(d["a"])(ka, ba, xa, !1, null, null, null)
          , $a = Sa.exports;
        u()(Sa, {
            VBtn: m["a"],
            VIcon: h["a"],
            VSpacer: M["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var Ca = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.category_title_map[t.category_value]) + " " + t._s(t.$t("win.record")))])], 1), a("v-card", {
                attrs: {
                    flat: ""
                }
            }, [a("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                    headers: t.headers,
                    items: t.guesses,
                    pagination: t.pagination,
                    "total-items": t.total_guess,
                    loading: t.guess_table_loading,
                    "rows-per-page-items": [10, 20]
                },
                on: {
                    "update:pagination": function(e) {
                        t.pagination = e
                    }
                },
                scopedSlots: t._u([{
                    key: "items",
                    fn: function(e) {
						return [a("td", {
						    staticClass: "text-xs-center",
						    staticStyle: {
						        padding: "0 8px"
						    }
						}, [t._v(t._s(e.item.num))]), a("td", {
						    staticClass: "text-xs-center",
						    staticStyle: {
						        padding: "0 8px"
						    }
						}, [t._v(t._s(e.item.pirce))]), e.item.color.includes("red") ? a("td", {
						    staticClass: "text-xs-center",
						    staticStyle: {
						        color: "#f44336",
						        padding: "0 8px"
						    }
						}, [t._v(t._s(e.item.number) + "\n            ")]) : t._e(), e.item.color.includes("green") ? a("td", {
						    staticClass: "text-xs-center",
						    staticStyle: {
						        color: "#4caf50",
						        padding: "0"
						    }
						}, [t._v(t._s(e.item.number) + "\n            ")]) : t._e(), a("td", {
						    staticClass: "text-xs-center",
						    staticStyle: {
						        padding: "0 8px"
						    }
						}, [a("div", {
						    staticStyle: {
						        display: "flex"
						    }
						}, [a("v-spacer"), e.item.color.includes("red") ? a("div", {
						    staticClass: "point",
						    staticStyle: {
						        "background-color": "#f44336"
						    }
						}) : t._e(), e.item.color.includes("green") ? a("div", {
						    staticClass: "point",
						    staticStyle: {
						        "background-color": "#4caf50"
						    }
						}) : t._e(), t._v("\n                 \n                "), e.item.color.includes("violet") ? a("div", {
						    staticClass: "point",
						    staticStyle: {
						        "background-color": "#9c27b0"
						    }
						}) : t._e(), a("v-spacer")], 1)])]
                    }
                }])
            })], 1)], 1)
        }
          , Va = []
          , Ta = {
            methods: {
                back: function() {
                    history.go(-1)
                },
                load_guesses: function() {
                    var t = this.pagination
                      , e = (t.sortBy,
                    t.descending,
                    t.page)
                      , a = t.rowsPerPage
                      , i = localStorage.getItem("coem.token")
                      , n = this.category_value;
                    this.guess_table_loading = !0;
                    var o = this
                      , s = this.$store.state.svrUrl
                      , r = s + "/ajax/lt_result?t=" + r + "&client=web&ver=&&token=" + localStorage.getItem("coem.token") + "&gtype=" + n + "&page=" + e + "&page_size=" + a
                    this.$ajax.get(r, {
                        // headers: {
                        //     Authorization: "Token " + i
                        // }
                    }).then((function(t) {
						if(9 == t.data.result)
						{
							localStorage.removeItem("coem.token");
							// e.$store.state.accessToken = null;
							location.href = "/#/login";
						}
                        if (o.guess_table_loading = !1,
                        0 == t.data.result) {
                            var e = t.data.page
                              , a = t.data.data;
                            o.total_guess = e.total,
                            o.guesses = a
                        }
                    }
                    )).catch((function(t) {
                        o.guess_table_loading = !1,
                        console.log(t),
                        t.response && 401 == t.response.status && (localStorage.removeItem("coem.token"),
                        o.$store.state.accessToken = null,
                        location.href = "/#/login")
                    }
                    ))
                }
            },
            watch: {
                pagination: {
                    handler: function() {
                        this.load_guesses()
                    },
                    deep: !0
                }
            },
            created: function() {
                this.category_value = this.$route.query.category_value
            },
            data: function() {
                return {
                    category_title_map: {
                        P: this.$t("win.parity"),
                        S: this.$t("win.sapre"),
                        B: this.$t("win.bcone"),
                        E: this.$t("win.emerd")
                    },
                    category_value: "P",
                    guesses: [],
                    total_guess: 0,
                    pagination: {
                        rowsPerPage: 10
                    },
                    guess_table_loading: !1,
                    headers: [{
                        text: this.$t("win.period"),
                        align: "center",
                        sortable: !1,
                        value: "num"
                    }, {
                        text: this.$t("win.price"),
                        align: "center",
                        sortable: !1,
                        value: "price"
                    }, {
                        text: this.$t("win.number"),
                        align: "center",
                        sortable: !1,
                        value: "number"
                    }, {
                        text: this.$t("win.result"),
                        align: "center",
                        sortable: !1,
                        value: "result"
                    }]
                }
            }
        }
          , Pa = Ta
          , ja = (a("df7e"),
        Object(d["a"])(Pa, Ca, Va, !1, null, null, null))
          , Ia = ja.exports;
        u()(ja, {
            VBtn: m["a"],
            VCard: v["a"],
            VDataTable: $t["a"],
            VIcon: h["a"],
            VSpacer: M["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var Ya = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.$t("win.my")) + " " + t._s(t.category_title_map[t.category_value]) + " " + t._s(t.$t("win.record")))])], 1), a("v-card", {
                attrs: {
                    flat: ""
                }
            }, [a("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                    "hide-headers": "",
                    items: t.my_guesses,
                    pagination: t.my_pagination,
                    "total-items": t.total_my_guess,
                    loading: t.my_guess_table_loading,
                    "rows-per-page-items": [10, 20]
                },
                on: {
                    "update:pagination": function(e) {
                        t.my_pagination = e
                    }
                },
                scopedSlots: t._u([{
                    key: "items",
                                        fn: function(e) {
                                            return [a("v-expansion-panel", [a("v-expansion-panel-content", {
                                                scopedSlots: t._u([{
                                                    key: "header",
                                                    fn: function() {
                                                        return [a("div", [a("span", [t._v(t._s(e.item.num))]), t._v("  \n                    "), ("0" == e.item.zjNum && "1" == e.item.js) ? a("span", {
                                                            staticStyle: {
                                                                color: "red"
                                                            }
                                                        }, [t._v(t._s(t.$t("win.fail")) + "  ")]) : t._e(), ("0" == e.item.zjNum && "1" == e.item.js) ? a("span", {
                                                            staticStyle: {
                                                                color: "red"
                                                            }
                                                        }, [t._v(t._s("-"+(e.item.win*-1).toFixed(2)) + "  ")]) : t._e(), "1" == e.item.zjNum ? a("span", {
                                                            staticStyle: {
                                                                color: "green"
                                                            }
                                                        }, [t._v(t._s(t.$t("win.success")) + "  ")]) : t._e(), "1" == e.item.zjNum ? a("span", {
                                                            staticStyle: {
                                                                color: "green"
                                                            }
                                                        }, [t._v(t._s("+"+(e.item.win*1).toFixed(2)) + "  ")]) : t._e(), "0" == e.item.js ? a("span", {
                                                            staticStyle: {
                                                                color: "orange"
                                                            }
                                                        }, [t._v(t._s(t.$t("win.wait")) + "  ")]) : t._e()])]
                                                    },
                                                    proxy: !0
                                                }], null, !0)
                                            }, [a("v-card", {
                                                staticStyle: {
                                                    margin: "8px"
                                                }
                                            }, [a("v-card-text", {
                                                staticStyle: {
                                                    padding: "0 24px 8px 24px",
                                                    "font-size": "12px"
                                                }
                                            }, [a("span", {
                                                staticStyle: {
                                                    color: "#009688",
                                                    "font-size": "14px"
                                                }
                                            }, [t._v(t._s(t.$t("win.period_detail")))]), a("v-layout", {
                                                staticStyle: {
                                                    "margin-top": "8px"
                                                }
                                            }, [a("v-flex", {
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, [t._v("\n                        " + t._s(t.$t("win.period")) + "\n                      ")]), a("v-flex", {
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, [t._v("\n                        " + t._s(e.item.num) + "\n                      ")])], 1), a("v-layout", {
                                                staticStyle: {
                                                    "margin-top": "8px"
                                                }
                                            }, [a("v-flex", {
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, [t._v("\n                        " + t._s(t.$t("win.contract_money")) + "\n                      ")]), a("v-flex", {
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, [t._v("\n                        " + t._s((e.item.gold*1 + (e.item.fee*1/e.item.beiShu*1)).toFixed(2)) + "\n                      ")])], 1), a("v-layout", {
                                                staticStyle: {
                                                    "margin-top": "8px"
                                                }
                                            }, [a("v-flex", {
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, [t._v("\n                        " + t._s(t.$t("win.contract_count")) + "\n                      ")]), a("v-flex", {
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, [t._v("\n                        " + t._s(e.item.beiShu) + "\n                      ")])], 1), a("v-layout", {
                                                staticStyle: {
                                                    "margin-top": "8px"
                                                }
                                            }, [a("v-flex", {
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, [t._v("\n                        " + t._s(t.$t("win.delivery")) + "\n                      ")]), a("v-flex", {
                                                staticStyle: {
                                                    color: "#f39839"
                                                },
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, [t._v("\n                        " + t._s((e.item.gold*1*(e.item.beiShu*1)).toFixed(2)) + "\n                      ")])], 1), a("v-layout", {
                                                staticStyle: {
                                                    "margin-top": "8px"
                                                }
                                            }, [a("v-flex", {
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, [t._v("\n                        " + t._s(t.$t("win.fee")) + "\n                      ")]), a("v-flex", {
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, [t._v("\n                        " + t._s((e.item.fee*1).toFixed(2)) + "\n                      ")])], 1), null != e.item.pirce ? a("v-layout", {
                                                staticStyle: {
                                                    "margin-top": "8px"
                                                }
                                            }, [a("v-flex", {
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, [t._v("\n                        " + t._s(t.$t("win.open_price")) + "\n                      ")]), a("v-flex", {
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, [t._v("\n                        " + t._s(e.item.pirce) + "\n                      ")])], 1) : t._e(), null != e.item.pirce ? a("v-layout", {
                                                staticStyle: {
                                                    "margin-top": "8px"
                                                }
                                            }, [a("v-flex", {
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, [t._v("\n                        " + t._s(t.$t("win.result")) + "\n                      ")]), a("v-flex", {
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, [a("span", {
                                                staticStyle: {
                                                    color: "#2197f3"
                                                }
                                            }, [t._v(t._s(e.item.result.substr(0,1)) + " ")]), ["1", "3", "5", "7", "9"].indexOf(e.item.result.substr(0,1)) >= 0 ? a("span", {
                                                staticStyle: {
                                                    color: "#4caf51"
                                                }
                                            }, [t._v(t._s(t.$t("win.green")) + " ")]) : t._e(), ["2", "4", "6", "8", "0"].indexOf(e.item.result.substr(0,1)) >= 0 ? a("span", {
                                                staticStyle: {
                                                    color: "#f44436"
                                                }
                                            }, [t._v(t._s(t.$t("win.red")) + " ")]) : t._e(), ["0", "5"].indexOf(e.item.result.substr(0,1)) >= 0 ? a("span", {
                                                staticStyle: {
                                                    color: "#9d27b0"
                                                }
                                            }, [t._v(t._s(t.$t("win.violet")) + " ")]) : t._e()])], 1) : t._e(), a("v-layout", {
                                                staticStyle: {
                                                    "margin-top": "8px"
                                                }
                                            }, [a("v-flex", {
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, [t._v("\n                        " + t._s(t.$t("win.select")) + "\n                      ")]), a("v-flex", {
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, ["GREEN" == e.item.betType ? a("span", {
                                                staticStyle: {
                                                    color: "#4caf51"
                                                }
                                            }, [t._v(t._s(t.$t("win.green")))]) : t._e(), "RED" == e.item.betType ? a("span", {
                                                staticStyle: {
                                                    color: "#f44436"
                                                }
                                            }, [t._v(t._s(t.$t("win.red")))]) : t._e(), "VIOLET" == e.item.betType ? a("span", {
                                                staticStyle: {
                                                    color: "#9d27b0"
                                                }
                                            }, [t._v(t._s(t.$t("win.violet")))]) : t._e(), "NUM" == e.item.betData ? a("span", {
                                                staticStyle: {
                                                    color: "#2197f3"
                                                }
                                            }, [t._v(t._s(e.item.number))]) : t._e()])], 1), a("v-layout", {
                                                staticStyle: {
                                                    "margin-top": "8px"
                                                }
                                            }, [a("v-flex", {
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, [t._v("\n                        " + t._s(t.$t("win.status")) + "\n                      ")]), a("v-flex", {
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, ["1" == e.item.zjNum ? a("span", {
                                                staticStyle: {
                                                    color: "green"
                                                }
                                            }, [t._v(t._s(t.$t("win.success")))]) : t._e(), ("0" == e.item.zjNum && "1" == e.item.js) ? a("span", {
                                                staticStyle: {
                                                    color: "red"
                                                }
                                            }, [t._v(t._s(t.$t("win.fail")))]) : t._e(), "0" == e.item.js ? a("span", {
                                                staticStyle: {
                                                    color: "orange"
                                                }
                                            }, [t._v(t._s(t.$t("win.wait")))]) : t._e()])], 1), null != e.item.win ? a("v-layout", {
                                                staticStyle: {
                                                    "margin-top": "8px"
                                                }
                                            }, [a("v-flex", {
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, [t._v("\n                        " + t._s(t.$t("win.amount")) + "\n                      ")]), a("v-flex", {
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, ["1" == e.item.zjNum ? a("span", {
                                                staticStyle: {
                                                    color: "green"
                                                }
                                            }, [t._v(t._s("+"+(e.item.win*1).toFixed(2)))]) : t._e(), "0" == e.item.zjNum ? a("span", {
                                                staticStyle: {
                                                    color: "red"
                                                }
                                            }, [t._v(t._s("-"+(e.item.win*1).toFixed(2)))]) : t._e()])], 1) : t._e(), a("v-layout", {
                                                staticStyle: {
                                                    "margin-top": "8px"
                                                }
                                            }, [a("v-flex", {
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, [t._v("\n                        " + t._s(t.$t("win.create_time")) + "\n                      ")]), a("v-flex", {
                                                attrs: {
                                                    xs6: "",
                                                    sm6: ""
                                                }
                                            }, [t._v("\n                        " + t._s(t._f("date_format")(e.item.time)) + "\n                      ")])], 1)], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                                                staticStyle: {
                                                    "margin-right": "12px",
                                                    "text-transform": "none"
                                                },
                                                attrs: {
                                                    small: "",
                                                    color: "teal",
                                                    dark: ""
                                                },
                                                on: {
                                                    click: function(a) {
                                                        return t.prepay(e.item.pirce)
                                                    }
                                                }
                                            }, [t._v(t._s(t.$t("win.prepay")) + "\n                    ")])], 1)], 1)], 1)], 1)]
                                        }
                                    }])
            })], 1)], 1)
        }
          , Da = []
          , qa = {
            filters: {
                date_format: function(t) {
                    var e = new Date(t);
                    return At(e, "yyyy-MM-dd hh:mm")
                }
            },
            methods: {
                back: function() {
                    history.go(-1)
                },
                prepay: function(t) {
                    location.href = "/#/item?price=" + t
                },
                load_my_guesses: function() {
                    var t = this.my_pagination
                      , e = (t.sortBy,
                    t.descending,
                    t.page)
                      , a = t.rowsPerPage
                      , i = localStorage.getItem("coem.token")
                      , n = this.category_value;
                    this.my_guess_table_loading = !0;
                    var o = this
                      , s = this.$store.state.svrUrl
                      , r = s + "/ajax/lt_order?t=" + r + "&client=web&ver=&status=&token=" + localStorage.getItem("coem.token") + "&gtype=" + n + "&page=" + e + "&page_size=" + a;
                    this.$ajax.get(r, {
                        // headers: {
                        //     Authorization: "Token " + i
                        // }
                    }).then((function(t) {
						if(9 == t.data.result)
						{
							localStorage.removeItem("coem.token");
							// e.$store.state.accessToken = null;
							location.href = "/#/login";
						}
                        if (o.my_guess_table_loading = !1,
                        0 == t.data.result) {
                            var e = t.data.page
                              , a = t.data.data;
                            o.total_my_guess = e.total,
                            o.my_guesses = a
                        }
                    }
                    )).catch((function(t) {
                        o.my_guess_table_loading = !1,
                        console.log(t),
                        t.response && 401 == t.response.status && (localStorage.removeItem("coem.token"),
                        o.$store.state.accessToken = null,
                        location.href = "/#/login")
                    }
                    ))
                }
            },
            watch: {
                my_pagination: {
                    handler: function() {
                        this.load_my_guesses()
                    },
                    deep: !0
                }
            },
            created: function() {
                this.category_value = this.$route.query.category_value
            },
            data: function() {
                return {
                    category_title_map: {
                        P: "Parity",
                        S: "Sapre",
                        B: "Bcone",
                        E: "Emerd"
                    },
                    category_value: "P",
                    my_guess_table_loading: !1,
                    my_pagination: {
                        rowsPerPage: 10
                    },
                    total_my_guess: 0,
                    my_guesses: []
                }
            }
        }
          , La = qa
          , Aa = (a("a94e"),
        Object(d["a"])(La, Ya, Da, !1, null, null, null))
          , Ea = Aa.exports;
        u()(Aa, {
            VBtn: m["a"],
            VCard: v["a"],
            VCardActions: it["a"],
            VCardText: it["b"],
            VDataTable: $t["a"],
            VExpansionPanel: Ot["a"],
            VExpansionPanelContent: Nt["a"],
            VFlex: ct["a"],
            VIcon: h["a"],
            VLayout: g["a"],
            VSpacer: M["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var za = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.$t("my.transactions")))])], 1), a("v-card", {
                attrs: {
                    flat: ""
                }
            }, [a("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                    "hide-headers": "",
                    items: t.items,
                    pagination: t.pagination,
                    "total-items": t.total_transaction,
                    loading: t.table_loading,
                    "rows-per-page-items": [10, 20]
                },
                on: {
                    "update:pagination": function(e) {
                        t.pagination = e
                    }
                },
                scopedSlots: t._u([{
                    key: "items",
                    fn: function(e) {
                        return [a("v-list", {
                            staticStyle: {
                                padding: "0"
                            },
                            attrs: {
                                "two-line": "",
                                subheader: ""
                            }
                        }, [a("v-list-tile", {
                            attrs: {
                                avatar: ""
                            }
                        }, [a("v-list-tile-avatar", [["1", "1"].indexOf(e.item.type+"") >= 0 ? a("v-icon", {
                            staticClass: "green white--text"
                        }, [t._v("\n                account_balance_wallet\n              ")]) : t._e(), "HREC" == e.item.type ? a("v-icon", {
                            staticClass: "red white--text"
                        }, [t._v("\n                account_balance_wallet\n              ")]) : t._e(), ("9" == e.item.type || "4" == e.item.type) ? a("v-icon", {
                            staticClass: "red white--text"
                        }, [t._v("monetization_on")]) : t._e(), "3" == e.item.type ? a("v-icon", {
                            staticClass: "green white--text"
                        }, [t._v("monetization_on")]) : t._e(), "WDF" == e.item.type ? a("v-icon", {
                            staticClass: "red white--text"
                        }, [t._v("attach_money")]) : t._e(), "ORD" == e.item.type ? a("v-icon", {
                            staticClass: "red white--text"
                        }, [t._v("shopping_cart")]) : t._e(), ("6" == e.item.type || "7" == e.item.type) ? a("v-icon", {
                            staticClass: "red white--text"
                        }, [t._v("emoji_events")]) : t._e(), "5" == e.item.type ? a("v-icon", {
                            staticClass: "green white--text"
                        }, [t._v("emoji_events")]) : t._e(), "GUP" == e.item.type ? a("v-icon", {
                            staticClass: "green white--text"
                        }, [t._v("assessment")]) : t._e(), "8" == e.item.type ? a("v-icon", {
                            staticClass: "green white--text"
                        }, [t._v("redeem")]) : t._e()], 1), a("v-list-tile-content", {
                            staticStyle: {
                                height: "120px"
                            }
                        }, ["HREC" == e.item.type ? a("v-list-tile-title", [t._v(t._s(t.$t("my.recharge_cancel")) + "\n              ")]) : t._e(), ["1", "1"].indexOf(e.item.type+"") >= 0 ? a("v-list-tile-title", [t._v(t._s(t.$t("my.recharge")) + "\n              ")]) : t._e(), ("9" == e.item.type || "4" == e.item.type) ? a("v-list-tile-title", [t._v(t._s(t.$t("my.withdrawal")))]) : t._e(), "3" == e.item.type ? a("v-list-tile-title", [t._v(t._s(t.$t("my.withdrawal_reject")))]) : t._e(), "WDF" == e.item.type ? a("v-list-tile-title", [t._v(t._s(t.$t("my.withdrawal_fee")))]) : t._e(), "ORD" == e.item.type ? a("v-list-tile-title", [t._v(t._s(t.$t("my.order_cost")))]) : t._e(), ("6" == e.item.type || "7" == e.item.type) ? a("v-list-tile-title", [t._v(t._s(t.$t("my.join_period")))]) : t._e(), "5" == e.item.type ? a("v-list-tile-title", [t._v(t._s(t.$t("my.period_win")))]) : t._e(), "GUP" == e.item.type ? a("v-list-tile-title", [t._v(t._s(t.$t("my.profit_from_promotion")) + "\n              ")]) : t._e(), "8" == e.item.type ? a("v-list-tile-title", [t._v(t._s(t.$t("my.receive_gift")) + "\n              ")]) : t._e(), a("v-list-tile-sub-title", {
                            staticStyle: {
                                "font-size": "12px"
                            }
                        }, [t._v(t._s(t._f("date_format")(e.item.time)) + "\n              ")])], 1), a("v-list-tile-action", [["9", "4","WDF", "ORD", "6", "7", "HREC"].indexOf(e.item.type+"") >= 0 ? a("v-list-tile-title", {
                            staticStyle: {
                                color: "red"
                            }
                        }, [t._v("" + t._s(e.item.money) + "\n              ")]) : t._e(), ["1", "1", "5", "GUP", "8", "3"].indexOf(e.item.type+"") >= 0 ? a("v-list-tile-title", {
                            staticStyle: {
                                color: "green"
                            }
                        }, [t._v("\n                " + t._s(e.item.money) + "\n              ")]) : t._e()], 1)], 1)], 1)]
                    }
                }])
            })], 1)], 1)
        }
          , Ba = []
          , Ra = {
            filters: {
                date_format: function(t) {
                    var e = new Date(t);
                    return At(e, "yyyy-MM-dd hh:mm")
                }
            },
            methods: {
                back: function() {
                    history.go(-1)
                },
                load_transactions: function() {
                    var t = this.pagination
                      , e = (t.sortBy,
                    t.descending,
                    t.page)
                      , a = t.rowsPerPage
                      , i = localStorage.getItem("coem.token");
                    this.table_loading = !0;
                    var n = this
                      , o = this.$store.state.svrUrl
                      , s = o + "/ajax/moneyHistory?client=web&ver=&token=" + localStorage.getItem("coem.token") + "&type=1&page=" + e + "&page_size=" + a;
                    this.$ajax.get(s, {
                        // headers: {
                        //     Authorization: "Token " + i
                        // }
                    }).then((function(t) {
						if(9 == t.data.result)
						{
							localStorage.removeItem("coem.token");
							// e.$store.state.accessToken = null;
							location.href = "/#/login";
						}
                        if (n.table_loading = !1,
                        0 == t.data.result) {
                            var e = t.data.page
                              , a = t.data.data;
                            n.total_transaction = e.total,
                            n.items = a
                        }
                    }
                    )).catch((function(t) {
                        n.table_loading = !1,
                        console.log(t),
                        t.response && 401 == t.response.status && (localStorage.removeItem("coem.token"),
                        n.$store.state.accessToken = null,
                        location.href = "/#/login")
                    }
                    ))
                }
            },
            watch: {
                pagination: {
                    handler: function() {
                        this.load_transactions()
                    },
                    deep: !0
                }
            },
            created: function() {},
            data: function() {
                return {
                    table_loading: !1,
                    pagination: {
                        rowsPerPage: 10
                    },
                    total_transaction: 0,
                    items: []
                }
            }
        }
          , Wa = Ra
          , Oa = Object(d["a"])(Wa, za, Ba, !1, null, null, null)
          , Na = Oa.exports;
        u()(Oa, {
            VBtn: m["a"],
            VCard: v["a"],
            VDataTable: $t["a"],
            VIcon: h["a"],
            VList: B["a"],
            VListTile: R["a"],
            VListTileAction: W["a"],
            VListTileAvatar: O["a"],
            VListTileContent: N["b"],
            VListTileSubTitle: N["c"],
            VListTileTitle: N["d"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var Ua = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.$t("my.withdrawal")))]), a("v-spacer"), a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.go_record()
                    }
                }
            }, [a("v-icon", [t._v("subject")])], 1)], 1), a("v-alert", {
                ref: "alert_div",
                attrs: {
                    value: t.alert_show,
                    type: "error",
                    icon: "info",
                    transition: "scale-transition",
                    dismissible: ""
                },
                domProps: {
                    textContent: t._s(t.alert_text)
                }
            }), a("v-card", [a("v-container", {
                attrs: {
                    fluid: "",
                    "grid-list-md": ""
                }
            }, [a("div", {
                staticClass: "headline text-xs-center pa-4"
            }, [t._v(t._s(t.$t("my.balance")) + ": "), a("span", {
                domProps: {
                    textContent: t._s(t.balance)
                }
            })]), a("div", {
                staticClass: "text-xs-center",
                staticStyle: {
                    "margin-top": "0px",
                    "padding-bottom": "32px"
                }
            }, [a("form", {
                ref: "form",
                attrs: {
                    "lazy-validation": "",
                    action: "javascript:;"
                }
            }, [a("v-text-field", {
                staticStyle: {
                    padding: "0 12px 0 12px"
                },
                attrs: {
                    color: "teal",
                    label: t.$t("my.enter_withdrawal_amount"),
                    "prepend-inner-icon": "monetization_on",
                    solo: "",
                    required: ""
                },
                model: {
                    value: t.amount,
                    callback: function(e) {
                        t.amount = "string" === typeof e ? e.trim() : e
                    },
                    expression: "amount"
                }
            }), a("p", {
                staticClass: "text-xs-left",
                staticStyle: {
                    margin: "0 0 0 16px",
                    padding: "0"
                }
            }, [t._v(t._s(t.$t("my.fee")) + ":" + t._s(t.fee) + ",\n            " + t._s(t.$t("my.to_account")) + "\n            " + t._s(t.to_account))]),a("p", {
                staticClass: "text-xs-left",
                staticStyle: {
                    margin: "10px 0 0 16px",
                    padding: "0"
                }
            }, [t._v(t._s(t.tip))]), a("v-list", [a("v-subheader", [t._v(t._s(t.$t("my.payout")))]), t._l(t.payouts, (function(e, i) {
                return a("v-list-tile", {
                    key: e.title,
                    attrs: {
                        disabled: t.dialog
                    },
                    on: {
                        click: function(e) {
                            return t.selectPayout(i)
                        }
                    }
                }, [a("v-list-tile-action", [e.icon ? a("v-icon", [t._v(t._s(e.icon))]) : t._e()], 1), a("v-list-tile-content", [a("v-list-tile-title", {
                    domProps: {
                        textContent: t._s(e.title)
                    }
                })], 1)], 1)
            }
            ))], 2), a("v-list", [a("v-list-group", {
                attrs: {
                    "prepend-icon": "payment",
                    "no-action": "",
                    disabled: t.dialog
                },
                scopedSlots: t._u([{
                    key: "activator",
                    fn: function() {
                        return [a("v-list-tile", [a("v-list-tile-content", [a("v-list-tile-title", [t._v(t._s(t.selected_bank_card_text))])], 1)], 1)]
                    },
                    proxy: !0
                }]),
                model: {
                    value: t.bank_card_select_active,
                    callback: function(e) {
                        t.bank_card_select_active = e
                    },
                    expression: "bank_card_select_active"
                }
            }, t._l(t.bank_card_options, (function(e) {
                return a("v-list-tile", {
                    key: e.id,
                    on: {
                        click: function(a) {
                            return t.bankCardClick(e.id, e.title)
                        }
                    }
                }, [a("v-list-tile-content", [a("v-list-tile-title", [t._v(t._s(e.title))])], 1)], 1)
            }
            )), 1)], 1), a("v-text-field", {
                staticStyle: {
                    padding: "8px 16px 8px 16px"
                },
                attrs: {
                    color: "teal",
                    label: t.$t("my.enter_pwd"),
                    "prepend-inner-icon": "vpn_key",
                    required: "",
                    type: "password",
                    disabled: t.dialog
                },
                model: {
                    value: t.login_password,
                    callback: function(e) {
                        t.login_password = e
                    },
                    expression: "login_password"
                }
            }), a("v-btn", {
                staticStyle: {
                    width: "240px",
                    color: "white",
                    height: "44px",
                    "margin-top": "12px",
                    "text-transform": "none"
                },
                attrs: {
                    color: "teal",
                    type: "submit",
                    disabled: t.dialog
                },
                on: {
                    click: function(e) {
                        return t.add_withdrawal()
                    }
                }
            }, [t._v(t._s(t.$t("my.withdrawal")) + "\n          ")])], 1)]), a("v-dialog", {
                attrs: {
                    "hide-overlay": "",
                    persistent: "",
                    width: "300"
                },
                model: {
                    value: t.dialog,
                    callback: function(e) {
                        t.dialog = e
                    },
                    expression: "dialog"
                }
            }, [a("v-card", {
                attrs: {
                    color: "teal",
                    dark: ""
                }
            }, [a("v-card-text", [t._v("\n            Loading\n            "), a("v-progress-linear", {
                staticClass: "mb-0",
                attrs: {
                    indeterminate: "",
                    color: "white"
                }
            })], 1)], 1)], 1), a("v-layout", {
                attrs: {
                    row: "",
                    "justify-center": ""
                }
            }, [a("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "290"
                },
                model: {
                    value: t.result_dialog,
                    callback: function(e) {
                        t.result_dialog = e
                    },
                    expression: "result_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline"
            }, [t._v(t._s(t.$t("main.completed")))]), a("v-card-text", [t._v(t._s(t.$t("msg.withdraw_success")))]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [t._v("Ok")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)
        }
          , Ma = []
          , Fa = {
            methods: {
                back: function() {
                    history.go(-1)
                },
                alertError: function(t) {
                    this.alert_text = t,
                    this.alert_show = !0;
                    var e = this;
                    setTimeout((function() {
                        e.alert_show = !1
                    }
                    ), 8e3)
                },
                selectPayout: function(t) {
                    this.selected_payout_index = t,
                    this.show_payouts(this.channels)
                },
                show_payouts: function(t) {
                    var e = [];
                    for (var a in t) {
                        var i = t[a]
                          , n = "";
                        a == this.selected_payout_index && (n = "done"),
                        e.push({
                            icon: n,
                            title: i.name
                        })
                    }
                    this.payouts = e
                },
                load_channels: function() {
                    tt.get(this, "/user/channels?type=withdrawal", !0, (function(t, e) {
                        200 == e.data.code && (t.channels = e.data.queryset,
                        t.show_payouts(t.channels))
                    }
                    ))
                    var s = this.$store.state.svrUrl
                    , r = s + "/ajax/getBankList?client=web&ver=&status=&token=" + localStorage.getItem("coem.token") + "&page=1&page_size=200";
                  this.$ajax.get(r, {
                      // headers: {
                      //     Authorization: "Token " + i
                      // }
                  }).then((function(t1) {
                    if(9 == t1.data.result)
                    {
                      localStorage.removeItem("coem.token");
                      // e.$store.state.accessToken = null;
                      location.href = "/#/login";
                    }
                      if (o.my_guess_table_loading = !1,
                      0 == t1.data.result) {
                          var a = t1.data.data;
                          localStorage.setItem("coem.banklist",JSON.stringify(a));
                      }
                  }
                  )).catch((function(t) {
                      o.my_guess_table_loading = !1,
                      console.log(t),
                      t.response && 401 == t.response.status && (localStorage.removeItem("coem.token"),
                      o.$store.state.accessToken = null,
                      location.href = "/#/login")
                  }
                  ))
                },
                go_record: function() {
                    location.href = "/#/withdrawalRecord"
                },
                bankCardClick: function(t, e) {
                    0 == t ? this.$router.push("/editBankCard") : (this.selected_bank_card_id = t,
                    this.selected_bank_card_text = e,
                    this.bank_card_select_active = !1)
                },
                add_withdrawal: function() {
                    if (0 != this.amount.length && 0 != this.login_password.length && this.selected_bank_card_id) {
                        // var t = this.channels[this.selected_payout_index].key;
						var t = "aaa";
                        this.dialog = !0;
                        var e = {
                            amount: this.amount,
                            bank_card_id: this.selected_bank_card_id,
                            password: this.login_password,
                            withdrawal_key: t
                        };
						e = "client=web&ver=&token=" + localStorage.getItem("coem.token") + "&amount=" + this.amount + "&getpasswd=" + hex_md5(this.login_password) + "&bankid=" + this.selected_bank_card_id;
                        tt.post(this, "/withdraw/cashWithdraw", e, !0, (function(t, e) {
							if(9 == e.data.result)
							{
								localStorage.removeItem("coem.token");
								// e.$store.state.accessToken = null;
								location.href = "/#/login";
							}
                            t.dialog = !1;
                            var a = e.data;
                            0 == a.result ? t.result_dialog = !0 : t.alertError(a.msg)
                        }
                        ))
                    }
                },
                loadProfile: function() {
                    var t = localStorage.getItem("coem.token")
                      , e = this
                      , a = this.$store.state.svrUrl
                      , i = a + "/ajax/balance";
                    // this.$ajax.get(i, {
                    //     // headers: {
                    //     //     Authorization: "Token " + t
                    //     // }
                    // }).then((function(t) {
                    //     var a = t.data.entry;
                    //     e.balance = e.$t("main.currency_symbol") + " " + a.balance.toFixed(2)
                    // }
                    // )).catch((function(t) {
                    //     console.log(t)
                    // }
                    // ))
					var ss = "client=web&ver=&token=" + localStorage.getItem("coem.token");
					tt.post(this, "/ajax/balance", ss, !0, (function(t, e) {
						if(9 == e.data.result)
						{
							localStorage.removeItem("coem.token");
							// e.$store.state.accessToken = null;
							location.href = "/#/login";
						}
					    t.dialog = !1;
					    var a = e.data;
					    0 == a.result ? t.balance = t.$t("main.currency_symbol") + " " + (a.data.balance*1).toFixed(2) : t.alertError(a.msg)
					}
					))
                },
				loadFee: function() {
				 //    var t = localStorage.getItem("coem.token")
				 //      , e = this
				 //      , a = this.$store.state.svrUrl
				 //      , i = a + "/ajax/balance";
					// var ss = "client=web&ver=&token=" + localStorage.getItem("coem.token");
					// tt.post(this, "/ajax/balance", ss, !0, (function(t, e) {
					// 	if(9 == e.data.result)
					// 	{
					// 		localStorage.removeItem("coem.token");
					// 		// e.$store.state.accessToken = null;
					// 		location.href = "/#/login";
					// 	}
					//     t.dialog = !1;
					//     var a = e.data;
					//     0 == a.result ? t.balance = t.$t("main.currency_symbol") + " " + (a.data.balance*1).toFixed(2) : t.alertError(a.msg)
					// }
					// ))
				},
                loadBankCards: function() {
                    var t = localStorage.getItem("coem.token")
                      , e = this
                      , a = this.$store.state.svrUrl
                      , i = a + "/ajax/wdbankList?client=web&ver=&token=" + localStorage.getItem("coem.token") + "&page=1&page_size=10";
                    this.$ajax.get(i, {
                        // headers: {
                        //     Authorization: "Token " + t
                        // }
                    }).then((function(t) {
                        var a = t.data.data
                          , b = t.data.data2
                          , i = [];
                        for (var n in a) {
                            var o = a[n];
                            i.push({
                                id: o.id,
                                title: o.realname + " " + o.account
                            })
                        }
                        i.push({
                            id: 0,
                            title: e.$t("my.add_bank_card")
                        }),
                        e.bank_card_options = i,
                        e.tip = b.fee_tip,
                        e.feelv = b.fee
                    }
                    )).catch((function(t) {
                        console.log(t),
                        t.response && 401 == t.response.status && (localStorage.removeItem("coem.token"),
                        e.$store.state.accessToken = null,
                        location.href = "/#/login")
                    }
                    ))
                }
            },
            created: function() {
                this.loadProfile(),
                this.loadBankCards(),
				this.loadFee(),
                this.load_channels()
            },
            computed: {
                fee: function() {
                    //return null == this.amount || "" == this.amount || isNaN(this.amount) ? 0 : this.amount < 1e3 ? 30 : (.02 * this.amount).toFixed(2)
                    // return this.fee;
                    if (this.feelv.indexOf("%")>0)
                    {
                        return null == this.amount || "" == this.amount || isNaN(this.amount) ? 0 : (parseFloat(this.feelv)/100 * this.amount).toFixed(2)
                    }
                    else
                    {
                        return this.feelv;
                    }
                },
                to_account: function() {
                    if (null == this.amount || "" == this.amount || isNaN(this.amount))
                        return 0;
                    var fees = 0;
                    if (this.feelv.indexOf("%")>0)
                    {
                        fees = parseFloat(this.amount) * parseFloat(this.feelv)/100;
                    }
                    else
                    {
                        fees = this.feelv;
                    }
                    var t = parseFloat(this.amount) - parseFloat(fees);
                    return t.toFixed(2)
                }
            },
            data: function() {
                return {
                    alert_show: !1,
                    alert_text: "",
                    result_dialog: !1,
                    dialog: !1,
                    feelv: "0",
                    login_password: "",
                    balance: this.$t("main.loading"),
                    amount: "",
                    bank_card_select_active: !1,
                    selected_bank_card_id: null,
                    selected_bank_card_text: this.$t("my.select_bank_card"),
                    bank_card_options: [{
                        id: 0,
                        title: this.$t("my.add_bank_card")
                    }],
                    channels: [],
                    payouts: [],
                    selected_payout_index: 0
                }
            }
        }
          , Ga = Fa
          , Ha = Object(d["a"])(Ga, Ua, Ma, !1, null, null, null)
          , Ka = Ha.exports;
        u()(Ha, {
            VAlert: le["a"],
            VBtn: m["a"],
            VCard: v["a"],
            VCardActions: it["a"],
            VCardText: it["b"],
            VCardTitle: nt["a"],
            VContainer: rt["a"],
            VDialog: lt["a"],
            VIcon: h["a"],
            VLayout: g["a"],
            VList: B["a"],
            VListGroup: ee["a"],
            VListTile: R["a"],
            VListTileAction: W["a"],
            VListTileContent: N["b"],
            VListTileTitle: N["d"],
            VProgressLinear: Ut["a"],
            VSpacer: M["a"],
            VSubheader: qe["a"],
            VTextField: ft["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var Ja = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.$t("my.withdrawal_record")))])], 1), a("v-card", {
                attrs: {
                    flat: ""
                }
            }, [a("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                    "hide-headers": "",
                    items: t.items,
                    pagination: t.pagination,
                    "total-items": t.total,
                    loading: t.table_loading,
                    "rows-per-page-items": [10, 20]
                },
                on: {
                    "update:pagination": function(e) {
                        t.pagination = e
                    }
                },
                scopedSlots: t._u([{
                    key: "items",
                    fn: function(e) {
                        return [a("v-list", {
                            staticStyle: {
                                padding: "0"
                            },
                            attrs: {
                                "two-line": "",
                                subheader: ""
                            }
                        }, [a("v-list-tile", {
                            attrs: {
                                avatar: ""
                            }
                        }, [a("v-list-tile-avatar", ["3" == e.item.status ? a("v-icon", {
                            staticClass: "green white--text"
                        }, [t._v("monetization_on")]) : "4" == e.item.status ? a("v-icon", {
                            staticClass: "red white--text"
                        }, [t._v("monetization_on")]) : a("v-icon", {
                            staticClass: "orange white--text"
                        }, [t._v("monetization_on")])], 1), a("v-list-tile-content", [a("v-list-tile-title", [t._v("\n                " + t._s(e.item.amount) + "\n                "), "3" == e.item.status ? a("span", [t._v(t._s(t.$t("my.success")))]) : "4" == e.item.status ? a("span", [t._v(t._s(t.$t("my.fail")))]) : a("span", [t._v(t._s(t.$t("my.wait")))])]), "4" == e.item.status ? a("v-list-tile-sub-title", {
                            staticStyle: {
                                "font-size": "12px"
                            }
                        }, [t._v("\n                " + t._s(t.$t("my.back_to_balance")) + "\n              ")]) : a("v-list-tile-sub-title", {
                            staticStyle: {
                                "font-size": "12px"
                            }
                        }, [t._v(t._s(t.$t("my.fee")) + ":" + t._s(e.item.fee) + ",\n                " + t._s(t.$t("my.to_account")) + "\n                " + t._s(e.item.amount) + "\n              ")]), null != e.item.remark && e.item.remark.length > 0 ? a("v-list-tile-sub-title", {
                            staticStyle: {
                                "font-size": "12px",
                                color: "red"
                            }
                        }, [t._v("\n                " + t._s(e.item.remark) + "\n              ")]) : t._e()], 1), a("v-list-tile-action", {
                            staticStyle: {
                                position: "absolute",
                                right: "16px",
                                top: "0"
                            }
                        }, [a("v-list-tile-sub-title", {
                            staticStyle: {
                                "font-size": "12px",
                                "padding-bottom": "24px"
                            }
                        }, [t._v(t._s(t._f("date_format")(e.item.time)) + "\n              ")])], 1)], 1)], 1)]
                    }
                }])
            })], 1)], 1)
        }
          , Qa = []
          , Xa = {
            filters: {
                date_format: function(t) {
                    var e = new Date(t);
                    return At(e, "yyyy-MM-dd hh:mm")
                }
            },
            methods: {
                back: function() {
                    history.go(-1)
                },
                load_withdrawals: function() {
                    var t = this.pagination
                      , e = (t.sortBy,
                    t.descending,
                    t.page)
                      , a = t.rowsPerPage
                      , i = localStorage.getItem("coem.token");
                    this.table_loading = !0;
                    var n = this
                      , o = this.$store.state.svrUrl
                      , s = o + "/ajax/getWithdrawList?client=web&ver=&token=" + localStorage.getItem("coem.token") + "&status=1&page=" + e + "&page_size=" + a;
                    this.$ajax.get(s, {
                        // headers: {
                        //     Authorization: "Token " + i
                        // }
                    }).then((function(t) {
						if(9 == t.data.result)
						{
							localStorage.removeItem("coem.token");
							// e.$store.state.accessToken = null;
							location.href = "/#/login";
						}
                        if (n.table_loading = !1,
                        0 == t.data.result) {
                            var e = t.data.page
                              , a = t.data.data;
                            n.total = e.total,
                            n.items = a
                        }
                    }
                    )).catch((function(t) {
                        n.table_loading = !1,
                        console.log(t),
                        t.response && 401 == t.response.status && (localStorage.removeItem("coem.token"),
                        n.$store.state.accessToken = null,
                        location.href = "/#/login")
                    }
                    ))
                }
            },
            watch: {
                pagination: {
                    handler: function() {
                        this.load_withdrawals()
                    },
                    deep: !0
                }
            },
            created: function() {},
            data: function() {
                return {
                    table_loading: !1,
                    pagination: {
                        rowsPerPage: 10
                    },
                    total: 0,
                    items: []
                }
            }
        }
          , Za = Xa
          , ti = Object(d["a"])(Za, Ja, Qa, !1, null, null, null)
          , ei = ti.exports;
        u()(ti, {
            VBtn: m["a"],
            VCard: v["a"],
            VDataTable: $t["a"],
            VIcon: h["a"],
            VList: B["a"],
            VListTile: R["a"],
            VListTileAction: W["a"],
            VListTileAvatar: O["a"],
            VListTileContent: N["b"],
            VListTileSubTitle: N["c"],
            VListTileTitle: N["d"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var ai = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.$t("my.recharge_record")))])], 1), a("v-card", {
                attrs: {
                    flat: ""
                }
            }, [a("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                    "hide-headers": "",
                    items: t.items,
                    pagination: t.pagination,
                    "total-items": t.total,
                    loading: t.table_loading,
                    "rows-per-page-items": [10, 20]
                },
                on: {
                    "update:pagination": function(e) {
                        t.pagination = e
                    }
                },
                scopedSlots: t._u([{
                    key: "items",
                    fn: function(e) {
                        return [a("v-list", {
                            staticStyle: {
                                padding: "0"
                            },
                            attrs: {
                                "two-line": "",
                                subheader: ""
                            }
                        }, [a("v-list-tile", {
                            attrs: {
                                avatar: ""
                            }
                        }, [a("v-list-tile-avatar", ["2" == e.item.status ? a("v-icon", {
                            staticClass: "orange white--text"
                        }, [t._v("account_balance_wallet")]) : t._e(), "3" == e.item.status && e.item.amount > 0 ? a("v-icon", {
                            staticClass: "green white--text"
                        }, [t._v("\n                account_balance_wallet\n              ")]) : t._e(), "4" == e.item.status ? a("v-icon", {
                            staticClass: "red white--text"
                        }, [t._v("\n                account_balance_wallet\n              ")]) : t._e()], 1), a("v-list-tile-content", {
                            staticStyle: {
                                height: "120px"
                            }
                        }, [a("v-list-tile-title", [t._v("\n                " + t._s(e.item.amount) + "\n                "), "3" == e.item.status ? a("span", [t._v(t._s(t.$t("my.success")))]) : t._e(), "2" == e.item.status ? a("span", [t._v(t._s(t.$t("my.wait")))]) : t._e()]), a("v-list-tile-sub-title", {
                            staticStyle: {
                                "font-size": "12px"
                            }
                        }, [t._v(t._s(e.item.title))])], 1), a("v-list-tile-action", [a("v-list-tile-sub-title", {
                            staticStyle: {
                                "font-size": "12px"
                            }
                        }, [t._v(t._s(t._f("date_format")(e.item.time)) + "\n              ")])], 1)], 1)], 1)]
                    }
                }])
            })], 1)], 1)
        }
          , ii = []
          , ni = {
            filters: {
                date_format: function(t) {
                    var e = new Date(t);
                    return At(e, "yyyy-MM-dd hh:mm")
                }
            },
            methods: {
                back: function() {
                    history.go(-1)
                },
                load_recharges: function() {
                    var t = this.pagination
                      , e = (t.sortBy,
                    t.descending,
                    t.page)
                      , a = t.rowsPerPage
                      , i = localStorage.getItem("coem.token");
                    this.table_loading = !0;
                    var n = this
                      , o = this.$store.state.svrUrl
                      , s = o + "/ajax/getDepositList?client=web&ver=&token=" + localStorage.getItem("coem.token") + "&status=1&page=" + e + "&page_size=" + a;
                    this.$ajax.get(s, {
                        // headers: {
                        //     Authorization: "Token " + i
                        // }
                    }).then((function(t) {
						if(9 == t.data.result)
						{
							localStorage.removeItem("coem.token");
							// e.$store.state.accessToken = null;
							location.href = "/#/login";
						}
                        if (n.table_loading = !1,
                        0 == t.data.result) {
                            var e = t.data.page
                              , a = t.data.data;
                            n.total = e.total,
                            n.items = a
                        }
                    }
                    )).catch((function(t) {
                        n.table_loading = !1,
                        console.log(t),
                        t.response && 401 == t.response.status && (localStorage.removeItem("coem.token"),
                        n.$store.state.accessToken = null,
                        location.href = "/#/login")
                    }
                    ))
                }
            },
            watch: {
                pagination: {
                    handler: function() {
                        this.load_recharges()
                    },
                    deep: !0
                }
            },
            created: function() {},
            data: function() {
                return {
                    table_loading: !1,
                    pagination: {
                        rowsPerPage: 10
                    },
                    total: 0,
                    items: []
                }
            }
        }
          , oi = ni
          , si = Object(d["a"])(oi, ai, ii, !1, null, null, null)
          , ri = si.exports;
        u()(si, {
            VBtn: m["a"],
            VCard: v["a"],
            VDataTable: $t["a"],
            VIcon: h["a"],
            VList: B["a"],
            VListTile: R["a"],
            VListTileAction: W["a"],
            VListTileAvatar: O["a"],
            VListTileContent: N["b"],
            VListTileSubTitle: N["c"],
            VListTileTitle: N["d"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var li = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-toolbar-title", [t._v("Gift")]), a("v-spacer")], 1), a("form", {
                ref: "form",
                staticStyle: {
                    padding: "24px"
                },
                attrs: {
                    "lazy-validation": "",
                    action: "javascript:;"
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    label: t.$t("my.gift_code"),
                    required: "",
                    "prepend-inner-icon": "redeem"
                },
                on: {
                    focus: function(e) {
                        return t.mobile_number_focus()
                    }
                },
                model: {
                    value: t.gift_code,
                    callback: function(e) {
                        t.gift_code = e
                    },
                    expression: "gift_code"
                }
            }), a("v-layout", {
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    type: "text",
                    label: t.$t("my.mobile_number"),
                    disabled: t.dialog,
                    required: "",
                    "prepend-inner-icon": "phone_android"
                },
                on: {
                    focus: function(e) {
                        return t.mobile_number_focus()
                    }
                },
                model: {
                    value: t.mobile_number,
                    callback: function(e) {
                        t.mobile_number = e
                    },
                    expression: "mobile_number"
                }
            })], 1)], 1), a("v-layout", {
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [t._v("\n        " + t._s(t.$t("msg.redeem_gift")) + "\n      ")])], 1), a("div", {
                staticClass: "text-xs-center",
                staticStyle: {
                    "margin-top": "16px"
                }
            }, [a("v-btn", {
                staticStyle: {
                    color: "white",
                    height: "44px",
                    width: "240px",
                    "text-transform": "none"
                },
                attrs: {
                    color: "teal",
                    type: "submit"
                },
                on: {
                    click: function(e) {
                        return t.redeem_gift()
                    }
                }
            }, [t._v(t._s(t.$t("main.continue")) + "\n      ")])], 1)], 1), a("v-dialog", {
                attrs: {
                    "hide-overlay": "",
                    persistent: "",
                    width: "300"
                },
                model: {
                    value: t.dialog,
                    callback: function(e) {
                        t.dialog = e
                    },
                    expression: "dialog"
                }
            }, [a("v-card", {
                attrs: {
                    color: "teal",
                    dark: ""
                }
            }, [a("v-card-text", [t._v("\n        " + t._s(t.$t("main.loading")) + "\n        "), a("v-progress-linear", {
                staticClass: "mb-0",
                attrs: {
                    indeterminate: "",
                    color: "white"
                }
            })], 1)], 1)], 1), a("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "290"
                },
                model: {
                    value: t.result_dialog,
                    callback: function(e) {
                        t.result_dialog = e
                    },
                    expression: "result_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline"
            }, [t._v(t._s(t.result_title))]), a("v-card-text", [t._v(t._s(t.result_content))]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        t.result_dialog = !1
                    }
                }
            }, [t._v(t._s(t.$t("main.ok")))])], 1)], 1)], 1)], 1)
        }
          , ci = []
          , di = {
            methods: {
                redeem_gift: function() {
                    var t = {
                        packet_code: this.gift_code,
                        mobile: this.mobile_number
                    };
                    this.dialog = !0,
                    tt.post(this, "/mana/receive_red_packet", t, !1, (function(t, e) {
                        t.dialog = !1,
                        200 == e.data.code ? (t.result_title = t.$t("main.completed"),
                        t.result_content = t.$t("msg.redeem_success"),
                        t.result_dialog = !0) : (t.result_title = t.$t("main.fail"),
                        t.result_content = e.data.msg,
                        t.result_dialog = !0)
                    }
                    ), (function(t, e) {
                        t.dialog = !1
                    }
                    ))
                },
                mobile_number_focus: function() {
                    // 0 == this.mobile_number.length && ("vi" == this.$i18n.locale ? this.mobile_number = "+84" : "in" == this.$i18n.locale && (this.mobile_number = "+91"))
					0 == this.mobile_number.length && ((this.mobile_number = "+91"))
                }
            },
            created: function() {
                var t = this.$route.query.c;
                t && t.length > 0 && (this.gift_code = t)
            },
            data: function() {
                return {
                    gift_code: "",
                    mobile_number: "",
                    dialog: !1,
                    result_dialog: !1,
                    result_title: "",
                    result_content: ""
                }
            }
        }
          , _i = di
          , ui = Object(d["a"])(_i, li, ci, !1, null, null, null)
          , pi = ui.exports;
        u()(ui, {
            VBtn: m["a"],
            VCard: v["a"],
            VCardActions: it["a"],
            VCardText: it["b"],
            VCardTitle: nt["a"],
            VDialog: lt["a"],
            VFlex: ct["a"],
            VLayout: g["a"],
            VProgressLinear: Ut["a"],
            VSpacer: M["a"],
            VTextField: ft["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var mi = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                },
                scopedSlots: t._u([{
                    key: "extension",
                    fn: function() {
                        return [a("v-tabs", {
                            attrs: {
                                color: "teal",
                                grow: ""
                            },
                            model: {
                                value: t.tab,
                                callback: function(e) {
                                    t.tab = e
                                },
                                expression: "tab"
                            }
                        }, [a("v-tabs-slider", {
                            staticStyle: {
                                height: "4px"
                            },
                            attrs: {
                                color: "white"
                            }
                        }), t._l(t.items, (function(e) {
                            return a("v-tab", {
                                key: e
                            }, [t._v(t._s(e))])
                        }
                        ))], 2)]
                    },
                    proxy: !0
                }])
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.$t("my.suggestions")))]), a("v-spacer"), a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.$router.push("/addSuggestion")
                    }
                }
            }, [a("v-icon", [t._v("add")])], 1)], 1), a("v-card", {
                attrs: {
                    flat: ""
                }
            }, [a("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                    "hide-headers": "",
                    items: t.list_items,
                    pagination: t.pagination,
                    "total-items": t.total,
                    loading: t.table_loading,
                    "rows-per-page-items": [10, 20]
                },
                on: {
                    "update:pagination": function(e) {
                        t.pagination = e
                    }
                },
                scopedSlots: t._u([{
                    key: "items",
                    fn: function(e) {
                        return [a("v-list", {
                            staticClass: "pa-0",
                            attrs: {
                                "two-line": ""
                            }
                        }, [[a("v-list-tile", {
                            key: e.item.serial_number,
                            attrs: {
                                avatar: "",
                                ripple: ""
                            },
                            on: {
                                click: function(a) {
                                    return t.show_detail(e.item)
                                }
                            }
                        }, [a("v-list-tile-content", [a("v-list-tile-title", [t._v(t._s(t.type_names[t.types.indexOf(e.item.type)]))]), a("v-list-tile-sub-title", {
                            staticClass: "text--primary"
                        }, [t._v("WhatsApp: " + t._s(e.item.title) + "\n                ")]), a("v-list-tile-sub-title", [t._v(t._s(e.item.outid))])], 1), a("v-list-tile-action", [a("v-list-tile-action-text", [t._v(t._s(t._f("date_format")(e.item.time)))]), "1" == e.item.status ? a("v-icon", {
                            attrs: {
                                color: "teal"
                            }
                        }, [t._v("\n                  assignment_turned_in\n                ")]) : a("v-icon", {
                            attrs: {
                                color: "grey lighten-1"
                            }
                        }, [t._v("\n                  hourglass_empty\n                ")])], 1)], 1)]], 2), e.index + 1 < t.list_items.length ? a("v-divider", {
                            key: e.index
                        }) : t._e()]
                    }
                }])
            })], 1), a("v-dialog", {
                attrs: {
                    "max-width": "90%",
                    scrollable: ""
                },
                model: {
                    value: t.detail_dialog,
                    callback: function(e) {
                        t.detail_dialog = e
                    },
                    expression: "detail_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline grey lighten-2",
                attrs: {
                    "primary-title": ""
                }
            }, [t._v(t._s(t.$t("main.detail")))]), a("v-card-text", [a("v-layout", {
                staticStyle: {
                    padding: "0 8px"
                },
                attrs: {
                    wrap: "",
                    "align-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: "",
                    sm12: "",
                    "d-flex": ""
                }
            }, [a("v-text-field", {
                attrs: {
                    color: "teal",
                    label: t.$t("my.type"),
                    readonly: ""
                },
                model: {
                    value: t.type_names[t.types.indexOf(t.selected_item.type)],
                    callback: function(e) {
                        t.$set(t.type_names, t.types.indexOf(t.selected_item.type), e)
                    },
                    expression: "type_names[types.indexOf(selected_item.type)]"
                }
            })], 1), a("v-flex", {
                attrs: {
                    xs12: "",
                    sm12: "",
                    "d-flex": ""
                }
            }, [a("v-text-field", {
                attrs: {
                    color: "teal",
                    label: t.$t("my.out_id"),
                    readonly: ""
                },
                model: {
                    value: t.selected_item.outid,
                    callback: function(e) {
                        t.$set(t.selected_item, "supple_serial", e)
                    },
                    expression: "selected_item.supple_serial"
                }
            })], 1), a("v-flex", {
                attrs: {
                    xs12: "",
                    sm12: "",
                    "d-flex": ""
                }
            }, [a("v-text-field", {
                attrs: {
                    color: "teal",
                    label: t.$t("my.whats_app"),
                    readonly: ""
                },
                model: {
                    value: t.selected_item.title,
                    callback: function(e) {
                        t.$set(t.selected_item, "whats_app", e)
                    },
                    expression: "selected_item.whats_app"
                }
            })], 1), a("v-flex", {
                attrs: {
                    xs12: "",
                    sm12: "",
                    "d-flex": ""
                }
            }, [a("v-textarea", {
                attrs: {
                    color: "teal",
                    label: t.$t("my.description"),
                    readonly: ""
                },
                model: {
                    value: t.selected_item.content,
                    callback: function(e) {
                        t.$set(t.selected_item, "content", e)
                    },
                    expression: "selected_item.content"
                }
            })], 1), "1" == t.selected_item.status ? a("v-flex", {
                attrs: {
                    xs12: "",
                    sm12: "",
                    "d-flex": ""
                }
            }, [a("v-textarea", {
                attrs: {
                    color: "teal",
                    label: t.$t("my.reply"),
                    readonly: ""
                },
                model: {
                    value: t.selected_item.reply_content,
                    callback: function(e) {
                        t.$set(t.selected_item, "reply", e)
                    },
                    expression: "selected_item.reply"
                }
            })], 1) : a("v-flex", {
                attrs: {
                    xs12: "",
                    sm12: "",
                    "d-flex": ""
                }
            }, [t._v("\n            Waiting for reply\n          ")])], 1)], 1), a("v-divider"), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    flat: "",
                    color: "grey darken-2"
                },
                on: {
                    click: function(e) {
                        t.detail_dialog = !1
                    }
                }
            }, [t._v(t._s(t.$t("main.close")))])], 1)], 1)], 1)], 1)
        }
          , vi = []
          , hi = {
            filters: {
                date_format: function(t) {
                    var e = new Date(t);
                    return At(e, "yyyy-MM-dd hh:mm")
                }
            },
            methods: {
                back: function() {
                    history.go(-1)
                },
                show_detail: function(t) {
                    this.selected_item = t,
                    this.detail_dialog = !0
                },
                load_list: function() {
                    var t = this
                      , e = this.pagination
                      , a = (e.sortBy,
                    e.descending,
                    e.page)
                      , i = e.rowsPerPage
                      , n = this.statuses[this.tab];
                    console.log("status:" + n),
                    this.table_loading = !0;
                    var o = "/ajax/getSuggestList?client=web&ver=&token=" + localStorage.getItem("coem.token") + "&status=" + (this.tab==0 ? 1 : 0) + "&page=" + a + "&page_size=" + i;
                    tt.get(this, o, !0, (function(e, a) {
						if(9 == a.data.result)
						{
							localStorage.removeItem("coem.token");
							// e.$store.state.accessToken = null;
							location.href = "/#/login";
						}
                        if (t.table_loading = !1,
                        0 == a.data.result) {
                            var i = a.data.page
                              , n = a.data.data;
                            e.total = i.total,
                            e.list_items = n
                        }
                    }
                    ), (function(e, a) {
                        t.table_loading = !1
                    }
                    ))
                }
            },
            watch: {
                pagination: {
                    handler: function() {
                        this.load_list()
                    },
                    deep: !0
                },
                tab: {
                    handler: function() {
                        this.load_list()
                    }
                }
            },
            data: function() {
                return {
                    detail_dialog: !1,
                    pagination: {
                        rowsPerPage: 10
                    },
                    table_loading: !1,
                    total: 0,
                    list_items: [],
                    statuses: ["Completed", "Wait"],
                    tab: 0,
                    items: [this.$t("main.completed"), this.$t("main.wait")],
                    types: ["S", "C", "RP", "WP", "PP", "GRP", "O"],
                    selected_item: {},
                    type_names: [this.$t("my.type_suggestion"), this.$t("my.type_consult"), this.$t("my.type_recharge"), this.$t("my.type_withdraw"), this.$t("my.type_parity"), this.$t("my.type_gift"), this.$t("my.type_other")]
                }
            }
        }
          , gi = hi
          , fi = Object(d["a"])(gi, mi, vi, !1, null, null, null)
          , yi = fi.exports;
        u()(fi, {
            VBtn: m["a"],
            VCard: v["a"],
            VCardActions: it["a"],
            VCardText: it["b"],
            VCardTitle: nt["a"],
            VDataTable: $t["a"],
            VDialog: lt["a"],
            VDivider: z["a"],
            VFlex: ct["a"],
            VIcon: h["a"],
            VLayout: g["a"],
            VList: B["a"],
            VListTile: R["a"],
            VListTileAction: W["a"],
            VListTileActionText: N["a"],
            VListTileContent: N["b"],
            VListTileSubTitle: N["c"],
            VListTileTitle: N["d"],
            VSpacer: M["a"],
            VTab: Mt["a"],
            VTabs: Gt["a"],
            VTabsSlider: Ht["a"],
            VTextField: ft["a"],
            VTextarea: _a["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var bi = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.$t("my.add_suggestion")))]), a("v-spacer")], 1), a("v-card", [a("v-container", {
                attrs: {
                    fluid: "",
                    "grid-list-md": ""
                }
            }, [a("div", {
                staticClass: "text-xs-center",
                staticStyle: {
                    "margin-top": "0px",
                    "padding-bottom": "24px"
                }
            }, [a("form", {
                ref: "form",
                attrs: {
                    "lazy-validation": "",
                    action: "javascript:;"
                }
            }, [a("v-layout", {
                staticStyle: {
                    padding: "0 24px"
                },
                attrs: {
                    wrap: "",
                    "align-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: "",
                    sm12: "",
                    "d-flex": ""
                }
            }, [a("v-select", {
                attrs: {
                    "menu-props": {
                        maxHeight: "360"
                    },
                    color: "teal",
                    items: t.items,
                    label: t.$t("my.type"),
                    required: "",
                    disabled: t.dialog
                },
                model: {
                    value: t.selected_item,
                    callback: function(e) {
                        t.selected_item = e
                    },
                    expression: "selected_item"
                }
            })], 1), a("v-flex", {
                attrs: {
                    xs12: "",
                    sm12: "",
                    "d-flex": ""
                }
            }, [a("v-text-field", {
                attrs: {
                    color: "teal",
                    label: t.$t("my.out_id"),
                    hint: t.$t("my.out_id_hint"),
                    disabled: t.dialog
                },
                model: {
                    value: t.out_id,
                    callback: function(e) {
                        t.out_id = e
                    },
                    expression: "out_id"
                }
            })], 1), a("v-flex", {
                attrs: {
                    xs12: "",
                    sm12: "",
                    "d-flex": ""
                }
            }, [a("v-text-field", {
                attrs: {
                    color: "teal",
                    label: t.$t("my.whats_app"),
                    hint: t.$t("my.whats_app_hint"),
                    required: "",
                    disabled: t.dialog
                },
                model: {
                    value: t.whats_app,
                    callback: function(e) {
                        t.whats_app = e
                    },
                    expression: "whats_app"
                }
            })], 1), a("v-flex", {
                attrs: {
                    xs12: "",
                    sm12: "",
                    "d-flex": ""
                }
            }, [a("v-textarea", {
                attrs: {
                    color: "teal",
                    name: "input-7-1",
                    label: t.$t("my.description"),
                    hint: t.desc_hint,
                    required: "",
                    disabled: t.dialog
                },
                model: {
                    value: t.description,
                    callback: function(e) {
                        t.description = e
                    },
                    expression: "description"
                }
            })], 1), a("v-flex", {
                attrs: {
                    xs12: "",
                    sm12: "",
                    "d-flex": ""
                }
            }, [t._v("\n              " + t._s(t.$t("my.service_desc")) + "\n            ")]), a("v-flex", {
                attrs: {
                    xs12: "",
                    sm12: "",
                    "d-flex": ""
                }
            }, [a("v-btn", {
                staticStyle: {
                    width: "240px",
                    color: "white",
                    height: "44px",
                    "margin-top": "12px",
                    "text-transform": "none"
                },
                attrs: {
                    color: "teal",
                    type: "submit",
                    disabled: t.dialog
                },
                on: {
                    click: t.submit_form
                }
            }, [t._v(t._s(t.$t("main.continue")) + "\n              ")])], 1)], 1)], 1)]), a("v-dialog", {
                attrs: {
                    "hide-overlay": "",
                    persistent: "",
                    width: "300"
                },
                model: {
                    value: t.dialog,
                    callback: function(e) {
                        t.dialog = e
                    },
                    expression: "dialog"
                }
            }, [a("v-card", {
                attrs: {
                    color: "teal",
                    dark: ""
                }
            }, [a("v-card-text", [t._v("\n            " + t._s(t.$t("main.loading")) + "\n            "), a("v-progress-linear", {
                staticClass: "mb-0",
                attrs: {
                    indeterminate: "",
                    color: "white"
                }
            })], 1)], 1)], 1), a("v-layout", {
                attrs: {
                    row: "",
                    "justify-center": ""
                }
            }, [a("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "290"
                },
                model: {
                    value: t.result_dialog,
                    callback: function(e) {
                        t.result_dialog = e
                    },
                    expression: "result_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline"
            }, [t._v(t._s(t.$t("main.completed")))]), a("v-card-text", [t._v(t._s(t.$t("msg.suggestion_success")))]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [t._v("Ok")])], 1)], 1)], 1)], 1)], 1)], 1), a("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "290"
                },
                model: {
                    value: t.error_dialog,
                    callback: function(e) {
                        t.error_dialog = e
                    },
                    expression: "error_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline"
            }, [t._v(t._s(t.$t("main.notice")))]), a("v-card-text", [t._v(t._s(t.error_content))]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        t.error_dialog = !1
                    }
                }
            }, [t._v(t._s(t.$t("main.ok")))])], 1)], 1)], 1)], 1)
        }
          , xi = []
          , wi = {
            methods: {
                back: function() {
                    history.go(-1)
                },
                submit_form: function() {
                    var t = this;
                    if (this.selected_item && 0 != this.whats_app.length && 0 != this.description.length) {
                        var e = this.items.indexOf(this.selected_item)
                          , a = this.types[e];
                        this.dialog = !0;
                        var i = {
                            type: a,
                            whats_app: this.whats_app,
                            description: this.description,
                            out_id: this.out_id
                        };
						i = "client=web&ver=&token=" + localStorage.getItem("coem.token") + "&title="+this.whats_app+"&content="+this.description+"&type="+a+"&outid="+this.out_id;
                        tt.post(this, "/ajax/submitSuggest", i, !0, (function(e, a) {
							if(9 == a.data.result)
							{
								localStorage.removeItem("coem.token");
								// e.$store.state.accessToken = null;
								location.href = "/#/login";
							}
                            t.dialog = !1,
                            0 == a.data.result ? e.result_dialog = !0 : (e.error_content = a.data.msg,
                            e.error_dialog = !0)
                        }
                        ), (function(e, a) {
                            t.dialog = !1,
                            e.error_content = a,
                            e.error_dialog = !0
                        }
                        ))
                    }
                }
            },
            watch: {
                description: function() {
                    var t = this.description.length;
                    this.desc_hint = t + "/500"
                }
            },
            data: function() {
                return {
                    error_content: "",
                    dialog: !1,
                    error_dialog: !1,
                    result_dialog: !1,
                    whats_app: "",
                    description: "",
                    desc_hint: "0/500",
                    out_id: "",
                    types: ["S", "C", "RP", "WP", "PP", "GRP", "O"],
                    selected_item: null,
                    items: [this.$t("my.type_suggestion"), this.$t("my.type_consult"), this.$t("my.type_recharge"), this.$t("my.type_withdraw"), this.$t("my.type_parity"), this.$t("my.type_gift"), this.$t("my.type_other")]
                }
            }
        }
          , ki = wi
          , Si = a("b56d")
          , $i = Object(d["a"])(ki, bi, xi, !1, null, null, null)
          , Ci = $i.exports;
        u()($i, {
            VBtn: m["a"],
            VCard: v["a"],
            VCardActions: it["a"],
            VCardText: it["b"],
            VCardTitle: nt["a"],
            VContainer: rt["a"],
            VDialog: lt["a"],
            VFlex: ct["a"],
            VIcon: h["a"],
            VLayout: g["a"],
            VProgressLinear: Ut["a"],
            VSelect: Si["a"],
            VSpacer: M["a"],
            VTextField: ft["a"],
            VTextarea: _a["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var Vi = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.$t("my.promotion")))]), a("v-spacer"), a("v-menu", {
                attrs: {
                    "offset-y": ""
                },
                scopedSlots: t._u([{
                    key: "activator",
                    fn: function(e) {
                        var i = e.on;
                        return [a("v-btn", t._g({
                            attrs: {
                                icon: ""
                            }
                        }, i), [a("v-icon", [t._v("subject")])], 1)]
                    }
                }])
            }, [a("v-list", t._l(t.records, (function(e, i) {
                return a("v-list-tile", {
                    key: i,
                    on: {
                        click: function(a) {
                            return t.record_click(e)
                        }
                    }
                }, [a("v-list-tile-title", [t._v(t._s(e.title))])], 1)
            }
            )), 1)], 1)], 1), a("v-card", {
                staticStyle: {
                    "padding-bottom": "24px"
                }
            }, [a("v-container", {
                attrs: {
                    fluid: "",
                    "grid-list-md": ""
                }
            }, [a("div", {
                staticClass: "headline text-xs-center pa-3"
            }, [t._v("\n        " + t._s(t.$t("my.bonus")) + ":\n        "), a("span", {
                domProps: {
                    textContent: t._s(t.bonus)
                }
            })]), a("v-flex", {
                staticClass: "text-xs-center",
                attrs: {
                    sm12: ""
                }
            }, [a("v-btn", {
                staticStyle: {
                    "text-transform": "none"
                },
                attrs: {
                    color: "teal",
                    dark: ""
                },
                on: {
                    click: t.apply
                }
            }, [t._v(t._s(t.$t("my.apply_to_balance")) + "\n        ")])], 1)], 1), a("v-tabs", {
                attrs: {
                    flat: "",
                    grow: ""
                },
                model: {
                    value: t.tab,
                    callback: function(e) {
                        t.tab = e
                    },
                    expression: "tab"
                }
            }, [a("v-tabs-slider", {
                attrs: {
                    color: "teal"
                }
            }), t._l(t.levels, (function(e) {
                return a("v-tab", {
                    key: e,
                    staticStyle: {
                        "text-transform": "none"
                    }
                }, [t._v(t._s(e))])
            }
            ))], 2), a("v-layout", {
                staticStyle: {
                    padding: "16px"
                }
            }, [a("v-flex", {
                staticClass: "text-xs-center",
                attrs: {
                    sm6: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "16px",
                    color: "#757575"
                }
            }, [t._v(t._s(t.$t("my.total_people")))]), a("div", {
                staticStyle: {
                    "font-size": "22px"
                }
            }, [t._v(t._s(t.total_people))])]), a("v-flex", {
                staticClass: "text-xs-center",
                attrs: {
                    sm6: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "16px",
                    color: "#757575"
                }
            }, [t._v(t._s(t.$t("my.contribution")))]), a("div", {
                staticStyle: {
                    "font-size": "22px"
                }
            }, [t._v(t._s(t.contribution))])])], 1), a("div", {
                staticStyle: {
                    padding: "16px"
                }
            }, [a("v-flex", {
                staticClass: "text-xs-center",
                attrs: {
                    sm12: ""
                }
            }, [a("v-text-field", {
                staticStyle: {
                    "font-family": "Arial"
                },
                attrs: {
                    color: "teal",
                    label: t.$t("my.my_promotion_code"),
                    readonly: ""
                },
                model: {
                    value: t.r_code,
                    callback: function(e) {
                        t.r_code = e
                    },
                    expression: "r_code"
                }
            })], 1), a("v-flex", {
                staticClass: "text-xs-center",
                attrs: {
                    sm12: ""
                }
            }, [a("v-textarea", {
                staticStyle: {
                    "font-family": "Arial"
                },
                attrs: {
                    color: "teal",
                    label: t.$t("my.my_promotion_link"),
                    readonly: ""
                },
                model: {
                    value: t.r_link,
                    callback: function(e) {
                        t.r_link = e
                    },
                    expression: "r_link"
                }
            }), a("v-btn", {
                staticStyle: {
                    "text-transform": "none",
                    width: "200px"
                },
                on: {
                    click: t.copy_link_func
                }
            }, [t._v(t._s(t.$t("my.copy_link")) + "\n        ")])], 1)], 1)], 1), a("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "80%"
                },
                model: {
                    value: t.apply_dialog,
                    callback: function(e) {
                        t.apply_dialog = e
                    },
                    expression: "apply_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline grey lighten-2"
            }, [a("span", {
                staticClass: "headline"
            }, [t._v(t._s(t.$t("my.apply_to_balance")))])]), a("v-card-text", [a("v-container", {
                attrs: {
                    "grid-list-md": ""
                }
            }, [a("v-layout", {
                attrs: {
                    wrap: ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs12: "",
                    sm12: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    color: "teal",
                    label: t.$t("my.bonus"),
                    required: "",
                    disabled: t.dialog
                },
                model: {
                    value: t.apply_bonus,
                    callback: function(e) {
                        t.apply_bonus = e
                    },
                    expression: "apply_bonus"
                }
            })], 1), a("v-flex", {
                staticClass: "text-xs-center",
                attrs: {
                    xs12: "",
                    sm12: ""
                }
            }, [a("v-btn", {
                staticStyle: {
                    "text-transform": "none",
                    width: "200px"
                },
                attrs: {
                    disabled: t.dialog
                },
                on: {
                    click: t.apply_all
                }
            }, [t._v(t._s(t.$t("my.apply_all")) + "\n              ")])], 1)], 1)], 1)], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "grey darken-2",
                    flat: "",
                    disabled: t.dialog
                },
                on: {
                    click: function(e) {
                        t.apply_dialog = !1
                    }
                }
            }, [t._v(t._s(t.$t("main.cancel")) + "\n        ")]), a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: "",
                    disabled: t.dialog
                },
                on: {
                    click: t.confirm_apply
                }
            }, [t._v(t._s(t.$t("main.confirm")) + "\n        ")])], 1)], 1)], 1), a("v-dialog", {
                attrs: {
                    "hide-overlay": "",
                    persistent: "",
                    width: "300"
                },
                model: {
                    value: t.dialog,
                    callback: function(e) {
                        t.dialog = e
                    },
                    expression: "dialog"
                }
            }, [a("v-card", {
                attrs: {
                    color: "teal",
                    dark: ""
                }
            }, [a("v-card-text", [t._v("\n        " + t._s(t.$t("main.loading")) + "\n        "), a("v-progress-linear", {
                staticClass: "mb-0",
                attrs: {
                    indeterminate: "",
                    color: "white"
                }
            })], 1)], 1)], 1), a("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "290"
                },
                model: {
                    value: t.result_dialog,
                    callback: function(e) {
                        t.result_dialog = e
                    },
                    expression: "result_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline"
            }, [t._v(t._s(t.$t("main.completed")))]), a("v-card-text", [t._v(t._s(t.$t("msg.apply_bonus_success")))]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        t.result_dialog = !1,
                        t.load_promotion_info()
                    }
                }
            }, [t._v("Ok")])], 1)], 1)], 1), a("v-dialog", {
                attrs: {
                    persistent: "",
                    "max-width": "290"
                },
                model: {
                    value: t.error_dialog,
                    callback: function(e) {
                        t.error_dialog = e
                    },
                    expression: "error_dialog"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline"
            }, [t._v(t._s(t.$t("main.notice")))]), a("v-card-text", [t._v(t._s(t.error_content))]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "teal darken-1",
                    flat: ""
                },
                on: {
                    click: function(e) {
                        t.error_dialog = !1
                    }
                }
            }, [t._v(t._s(t.$t("main.ok")))])], 1)], 1)], 1)], 1)
        }
          , Ti = []
          , Pi = {
            methods: {
                back: function() {
                    history.go(-1)
                },
                record_click: function(t) {
                    "bonus" == t.key ? this.$router.push("/bonusRecord") : "promotion" == t.key ? this.$router.push("/promotionRecord") : "apply" == t.key && this.$router.push("/applyToBalanceRecord")
                },
                apply: function() {
                    this.apply_bonus = "",
                    this.apply_dialog = !0
                },
                apply_all: function() {
                    this.apply_bonus = this.profit_amount
                },
                confirm_apply: function() {
                    if (0 != this.apply_bonus.length && !isNaN(this.apply_bonus) && !(parseFloat(this.apply_bonus) <= 0)) {
                        this.dialog = !0;
                        var t = {
                            apply_bonus: this.apply_bonus
                        };
                        // tt.post(this, "/ajax/applyInviteBonusToBalance", t, !0, (function(t, e) {
                        //     t.dialog = !1,
                        //     t.apply_dialog = !1,
                        //     200 == e.data.code ? t.result_dialog = !0 : (t.error_content = e.data.msg,
                        //     t.error_dialog = !0)
                        // }
                        // ), (function(t, e) {
                        //     t.dialog = !1,
                        //     t.apply_dialog = !1,
                        //     t.error_content = e,
                        //     t.error_dialog = !0
                        // }
                        // ))
						t = "client=web&ver=&token=" + localStorage.getItem("coem.token") + "&bonus=" + this.apply_bonus;
						tt.get(this, "/ajax/applyInviteBonusToBalance?" + t, !0, (function(t, e) {
							t.dialog = !1;
							t.apply_dialog = !1;
							if(0 == e.data.result)
							{
								t.result_dialog = !0
							}
							else
							{
								t.error_content = e.data.msg;
								t.error_dialog = !0;
							}
							t.dialog = !1;
							t.apply_dialog = !1;
							    
						    // 200 == e.data.code && (t.bonus = t.$t("main.currency_symbol") + " " + e.data.profit,
						    // t.profit_amount = e.data.profit,
						    // t.info = e.data.info,
						    // t.handle_info())
						}
						))
                    }
                },
                copy_link_func: function() {
                    // window.open(this.r_link)
					let transfer = document.createElement('input');
					document.body.appendChild(transfer);
					transfer.value = this.r_link;  // 这里表示想要复制的内容
					transfer.focus();
					transfer.select();
					if (document.execCommand('copy')) {
					    document.execCommand('copy');
					}
					transfer.blur();
					alert('Copy success');
					document.body.removeChild(transfer);
                },
                load_promotion_info: function() {
                    var t = Date.parse(new Date);
					t = "client=web&ver=&token=" + localStorage.getItem("coem.token");
                    tt.get(this, "/ajax/getInviteOverview?" + t, !0, (function(t, e) {
						if(0 == e.data.result)
						{
							t.bonus = t.$t("main.currency_symbol") + " " + e.data.data.total_bonus;
							t.profit_amount = 1;
							var info = {"one_level_user_count":e.data.data.b1_total_user,"one_level_contribution":e.data.data.b1_total_bet,"two_level_user_count":e.data.data.b2_total_user,"two_level_contribution":e.data.data.b2_total_bet};
							t.info = info;
							t.handle_info();
							localStorage.setItem("coem.r_code", e.data.data.intr);
							t.r_code = localStorage.getItem("coem.r_code");
							t.r_link = t.$store.state.preUrl + "/#/register?r_code=" + t.r_code;
						}
                        // 200 == e.data.code && (t.bonus = t.$t("main.currency_symbol") + " " + e.data.profit,
                        // t.profit_amount = e.data.profit,
                        // t.info = e.data.info,
                        // t.handle_info())
                    }
                    ))
                },
                handle_info: function() {
                    0 == this.tab ? (this.total_people = this.info.one_level_user_count,
                    this.contribution = this.$t("main.currency_symbol") + " " + this.info.one_level_contribution) : (this.total_people = this.info.two_level_user_count,
                    this.contribution = this.$t("main.currency_symbol") + " " + this.info.two_level_contribution)
                }
            },
            watch: {
                tab: function() {
                    this.handle_info()
                }
            },
            created: function() {
                // this.r_code = localStorage.getItem("coem.r_code"),
                // this.r_link = this.$store.state.appUrl + "/#/register?r_code=" + this.r_code,
                this.load_promotion_info()
            },
            data: function() {
                return {
                    error_content: "",
                    apply_bonus: "",
                    dialog: !1,
                    error_dialog: !1,
                    apply_dialog: !1,
                    result_dialog: !1,
                    info: {},
                    r_link: "",
                    r_code: "",
                    total_people: "",
                    contribution: "",
                    profit_amount: "",
                    bonus: "",
                    tab: 0,
                    levels: [this.$t("my.level_1"), this.$t("my.level_2")],
                    records: [{
                        key: "promotion",
                        title: this.$t("my.promotion_record")
                    }, {
                        key: "bonus",
                        title: this.$t("my.bonus_record")
                    }, {
                        key: "apply",
                        title: this.$t("my.apply_record")
                    }]
                }
            }
        }
          , ji = Pi
          , Ii = a("e449")
          , Yi = Object(d["a"])(ji, Vi, Ti, !1, null, null, null)
          , Di = Yi.exports;
        u()(Yi, {
            VBtn: m["a"],
            VCard: v["a"],
            VCardActions: it["a"],
            VCardText: it["b"],
            VCardTitle: nt["a"],
            VContainer: rt["a"],
            VDialog: lt["a"],
            VFlex: ct["a"],
            VIcon: h["a"],
            VLayout: g["a"],
            VList: B["a"],
            VListTile: R["a"],
            VListTileTitle: N["d"],
            VMenu: Ii["a"],
            VProgressLinear: Ut["a"],
            VSpacer: M["a"],
            VTab: Mt["a"],
            VTabs: Gt["a"],
            VTabsSlider: Ht["a"],
            VTextField: ft["a"],
            VTextarea: _a["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var qi = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                },
                scopedSlots: t._u([{
                    key: "extension",
                    fn: function() {
                        return [a("v-tabs", {
                            attrs: {
                                color: "teal",
                                grow: ""
                            },
                            model: {
                                value: t.tab,
                                callback: function(e) {
                                    t.tab = e
                                },
                                expression: "tab"
                            }
                        }, [a("v-tabs-slider", {
                            staticStyle: {
                                height: "4px"
                            },
                            attrs: {
                                color: "white"
                            }
                        }), t._l(t.items, (function(e) {
                            return a("v-tab", {
                                key: e
                            }, [t._v(t._s(e))])
                        }
                        ))], 2)]
                    },
                    proxy: !0
                }])
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.$t("my.bonus_record")))]), a("v-spacer")], 1), a("v-card", {
                attrs: {
                    flat: ""
                }
            }, [a("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                    "hide-headers": "",
                    items: t.queryset,
                    pagination: t.pagination,
                    "total-items": t.total,
                    loading: t.table_loading,
                    "rows-per-page-items": [10, 20]
                },
                on: {
                    "update:pagination": function(e) {
                        t.pagination = e
                    }
                },
                scopedSlots: t._u([{
                    key: "items",
                    fn: function(e) {
                        return [a("v-list", {
                            staticStyle: {
                                padding: "0"
                            },
                            attrs: {
                                "two-line": "",
                                subheader: ""
                            }
                        }, [a("v-list-tile", {
                            attrs: {
                                avatar: ""
                            }
                        }, [a("v-list-tile-avatar", [a("v-icon", {
                            staticClass: "green white--text"
                        }, [t._v("monetization_on")])], 1), a("v-list-tile-content", {
                            staticStyle: {
                                height: "120px"
                            }
                        }, [a("v-list-tile-title", [a("span", [t._v(t._s(t.$t("win.period")) + ":" + t._s(e.item.username))])]), a("v-list-tile-sub-title", {
                            staticStyle: {
                                "font-size": "12px"
                            }
                        }, [t._v(t._s(t._f("date_format")(e.item.bet_time)) + "\n              ")])], 1), a("v-list-tile-action", [a("v-list-tile-title", {
                            staticStyle: {
                                color: "green"
                            }
                        }, [t._v("\n                +" + t._s(e.item.reward) + "\n              ")])], 1)], 1)], 1)]
                    }
                }])
            })], 1)], 1)
        }
          , Li = []
          , Ai = {
            filters: {
                date_format: function(t) {
                    var e = new Date(t);
                    return At(e, "yyyy-MM-dd hh:mm")
                }
            },
            methods: {
                back: function() {
                    history.go(-1)
                },
                load_bonus_record: function(t) {
                    var e = this.pagination
                      , a = (e.sortBy,
                    e.descending,
                    e.page)
                      , i = e.rowsPerPage;
                    this.table_loading = !0;
                    var n = "/ajax/getInviteBonusList?page=" + a + "&page_size=" + i + "&type=" + t + "&client=web&ver=&token="+localStorage.getItem("coem.token");;
                    tt.get(this, n, !0, (function(t, e) {
                        if (t.table_loading = !1,
                        0 == e.data.result) {
                            var a = e.data.page;
                            t.total = a.total,
                            t.queryset = e.data.data
                        }
                    }
                    ))
                }
            },
            watch: {
                pagination: {
                    handler: function() {
                        this.load_bonus_record(this.tab + 1)
                    },
                    deep: !0
                },
                tab: {
                    handler: function() {
                        this.total = 0,
                        this.queryset = [],
                        this.pagination.page = 1,
                        this.load_bonus_record(this.tab + 1)
                    }
                }
            },
            data: function() {
                return {
                    queryset: [],
                    pagination: {
                        rowsPerPage: 10
                    },
                    total: 0,
                    table_loading: !1,
                    tab: 0,
                    items: [this.$t("my.level_1"), this.$t("my.level_2")]
                }
            }
        }
          , Ei = Ai
          , zi = Object(d["a"])(Ei, qi, Li, !1, null, null, null)
          , Bi = zi.exports;
        u()(zi, {
            VBtn: m["a"],
            VCard: v["a"],
            VDataTable: $t["a"],
            VIcon: h["a"],
            VList: B["a"],
            VListTile: R["a"],
            VListTileAction: W["a"],
            VListTileAvatar: O["a"],
            VListTileContent: N["b"],
            VListTileSubTitle: N["c"],
            VListTileTitle: N["d"],
            VSpacer: M["a"],
            VTab: Mt["a"],
            VTabs: Gt["a"],
            VTabsSlider: Ht["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var Ri = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                },
                scopedSlots: t._u([{
                    key: "extension",
                    fn: function() {
                        return [a("v-tabs", {
                            attrs: {
                                color: "teal",
                                grow: ""
                            },
                            model: {
                                value: t.tab,
                                callback: function(e) {
                                    t.tab = e
                                },
                                expression: "tab"
                            }
                        }, [a("v-tabs-slider", {
                            staticStyle: {
                                height: "4px"
                            },
                            attrs: {
                                color: "white"
                            }
                        }), t._l(t.items, (function(e) {
                            return a("v-tab", {
                                key: e
                            }, [t._v(t._s(e))])
                        }
                        ))], 2)]
                    },
                    proxy: !0
                }])
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.$t("my.promotion_record")))]), a("v-spacer")], 1), a("v-card", {
                attrs: {
                    flat: ""
                }
            }, [a("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                    "hide-headers": "",
                    items: t.queryset,
                    pagination: t.pagination,
                    "total-items": t.total,
                    loading: t.table_loading,
                    "rows-per-page-items": [10, 20]
                },
                on: {
                    "update:pagination": function(e) {
                        t.pagination = e
                    }
                },
                scopedSlots: t._u([{
                    key: "items",
                    fn: function(e) {
                        return [a("v-list", {
                            staticStyle: {
                                padding: "0"
                            },
                            attrs: {
                                "two-line": "",
                                subheader: ""
                            }
                        }, [a("v-list-tile", {
                            attrs: {
                                avatar: ""
                            }
                        }, [a("v-list-tile-avatar", [a("v-icon", [t._v("account_box")])], 1), a("v-list-tile-content", [a("v-list-tile-title", [t._v(t._s(e.item.username))]), 0 == t.tab ? a("v-list-tile-sub-title", [t._v("First recharge: " + t._s(e.item.first_recharge))]) : t._e()], 1), a("v-list-tile-action", [a("v-list-tile-sub-title", {
                            staticStyle: {
                                "font-size": "12px"
                            }
                        }, [t._v(t._s(t._f("date_format")(e.item.reg_time)))])], 1)], 1)], 1)]
                    }
                }])
            })], 1)], 1)
        }
          , Wi = []
          , Oi = {
            filters: {
                date_format: function(t) {
                    var e = new Date(t);
                    return At(e, "yyyy-MM-dd hh:mm")
                }
            },
            methods: {
                back: function() {
                    history.go(-1)
                },
                load_promotion_users: function(t) {
                    var e = this.pagination
                      , a = (e.sortBy,
                    e.descending,
                    e.page)
                      , i = e.rowsPerPage;
                    this.table_loading = !0;
                    var n = "/ajax/getInviteList?page=" + a + "&page_size=" + i + "&type=" + t + "&client=web&ver=&token="+localStorage.getItem("coem.token");
                    tt.get(this, n, !0, (function(t, e) {
                        if (t.table_loading = !1,
                        0 == e.data.result) {
                            var a = e.data.page;
                            t.total = a.total,
                            t.queryset = e.data.data
                        }
                    }
                    ))
                }
            },
            watch: {
                pagination: {
                    handler: function() {
                        this.load_promotion_users(this.tab + 1)
                    },
                    deep: !0
                },
                tab: {
                    handler: function() {
                        this.total = 0,
                        this.queryset = [],
                        this.pagination.page = 1,
                        this.load_promotion_users(this.tab + 1)
                    }
                }
            },
            data: function() {
                return {
                    queryset: [],
                    pagination: {
                        rowsPerPage: 10
                    },
                    total: 0,
                    table_loading: !1,
                    tab: 0,
                    items: [this.$t("my.level_1"), this.$t("my.level_2")]
                }
            }
        }
          , Ni = Oi
          , Ui = Object(d["a"])(Ni, Ri, Wi, !1, null, null, null)
          , Mi = Ui.exports;
        u()(Ui, {
            VBtn: m["a"],
            VCard: v["a"],
            VDataTable: $t["a"],
            VIcon: h["a"],
            VList: B["a"],
            VListTile: R["a"],
            VListTileAction: W["a"],
            VListTileAvatar: O["a"],
            VListTileContent: N["b"],
            VListTileSubTitle: N["c"],
            VListTileTitle: N["d"],
            VSpacer: M["a"],
            VTab: Mt["a"],
            VTabs: Gt["a"],
            VTabsSlider: Ht["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var Fi = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticStyle: {
                    "padding-bottom": "64px"
                }
            }, [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [a("v-icon", [t._v("arrow_back")])], 1), a("v-toolbar-title", [t._v(t._s(t.$t("my.apply_record")))]), a("v-spacer")], 1), a("v-card", {
                attrs: {
                    flat: ""
                }
            }, [a("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                    "hide-headers": "",
                    items: t.queryset,
                    pagination: t.pagination,
                    "total-items": t.total,
                    loading: t.table_loading,
                    "rows-per-page-items": [10, 20]
                },
                on: {
                    "update:pagination": function(e) {
                        t.pagination = e
                    }
                },
                scopedSlots: t._u([{
                    key: "items",
                    fn: function(e) {
                        return [a("v-list", {
                            staticStyle: {
                                padding: "0"
                            },
                            attrs: {
                                "two-line": "",
                                subheader: ""
                            }
                        }, [a("v-list-tile", {
                            attrs: {
                                avatar: ""
                            }
                        }, [a("v-list-tile-avatar", ["2" == e.item.status ? a("v-icon", {
                            staticClass: "red white--text"
                        }, [t._v("uncheck_circle_ssdaadad")]) : t._e(), "1" == e.item.status ? a("v-icon", {
                            staticClass: "grey white--text"
                        }, [t._v("hourglass_empty")]) : t._e(), "0" == e.item.status ? a("v-icon", {
                            staticClass: "green white--text"
                        }, [t._v("check_circle_outline")]) : t._e()], 1), a("v-list-tile-content", {
                            staticStyle: {
                                height: "120px"
                            }
                        }, [t._v("\n              " + t._s(t.$t("my.apply_to_balance")) + "\n              "), a("v-list-tile-sub-title", {
                            staticStyle: {
                                "font-size": "12px"
                            }
                        }, [t._v(t._s(t._f("date_format")(e.item.create_time)) + "\n              ")])], 1), a("v-list-tile-action", [a("v-list-tile-title", [t._v(t._s(e.item.bonus))])], 1)], 1)], 1)]
                    }
                }])
            })], 1)], 1)
        }
          , Gi = []
          , Hi = {
            filters: {
                date_format: function(t) {
                    var e = new Date(t);
                    return At(e, "yyyy-MM-dd hh:mm")
                }
            },
            methods: {
                back: function() {
                    history.go(-1)
                },
                load_apply_record: function() {
                    var t = this.pagination
                      , e = (t.sortBy,
                    t.descending,
                    t.page)
                      , a = t.rowsPerPage;
                    this.table_loading = !0;
                    var i = "/ajax/getInviteTransferList?page=" + e + "&page_size=" + a + "&client=web&ver=&token="+localStorage.getItem("coem.token");
                    tt.get(this, i, !0, (function(t, e) {
                        if (t.table_loading = !1,
                        0 == e.data.result) {
                            var a = e.data.page;
                            t.total = a.total,
                            t.queryset = e.data.data
                        }
                    }
                    ))
                }
            },
            watch: {
                pagination: {
                    handler: function() {
                        this.load_apply_record()
                    },
                    deep: !0
                },
                tab: {
                    handler: function() {
                        this.total = 0,
                        this.queryset = [],
                        this.pagination.page = 1,
                        this.load_apply_record()
                    }
                }
            },
            data: function() {
                return {
                    queryset: [],
                    pagination: {
                        rowsPerPage: 10
                    },
                    total: 0,
                    table_loading: !1
                }
            }
        }
          , Ki = Hi
          , Ji = Object(d["a"])(Ki, Fi, Gi, !1, null, null, null)
          , Qi = Ji.exports;
        u()(Ji, {
            VBtn: m["a"],
            VCard: v["a"],
            VDataTable: $t["a"],
            VIcon: h["a"],
            VList: B["a"],
            VListTile: R["a"],
            VListTileAction: W["a"],
            VListTileAvatar: O["a"],
            VListTileContent: N["b"],
            VListTileSubTitle: N["c"],
            VListTileTitle: N["d"],
            VSpacer: M["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var Xi = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-toolbar-title", [t._v(t._s(t.$t("win.parity")))]), a("v-spacer")], 1), a("v-layout", {
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs6: "",
                    sm6: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px"
                }
            }, [t._v("\n        " + t._s(t.$t("win.period")) + "\n      ")]), a("div", {
                staticStyle: {
                    "margin-left": "12px",
                    "font-size": "22px"
                }
            }, [t._v(t._s(t.next_period))])]), a("v-flex", {
                staticStyle: {
                    "text-align": "right"
                },
                attrs: {
                    xs6: "",
                    sm6: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px 12px 10px 0"
                }
            }, [t._v(t._s(t.$t("win.count_down")))]), t.count_down_num_show ? a("div", {
                staticStyle: {
                    margin: "0 12px 0 0"
                }
            }, [a("span", {
                staticClass: "time-sub"
            }, [t._v(t._s(t.min_ten))]), a("span", {
                staticClass: "time-sub"
            }, [t._v(t._s(t.min_bit))]), a("span", {
                staticClass: "time-sub-dot"
            }, [t._v(":")]), a("span", {
                staticClass: "time-sub"
            }, [t._v(t._s(t.sec_ten))]), a("span", {
                staticClass: "time-sub"
            }, [t._v(t._s(t.sec_bit))])]) : t._e(), t.continue_button_show ? a("div", {
                staticStyle: {
                    margin: "0 12px 0 0"
                }
            }, [a("v-btn", {
                staticStyle: {
                    color: "white",
                    "text-transform": "none"
                },
                attrs: {
                    color: "orange",
                    disabled: t.continue_button_disabled
                },
                on: {
                    click: function(e) {
                        return t.continue_click()
                    }
                }
            }, [t._v(t._s(t.$t("main.continue")) + "\n        ")])], 1) : t._e()])], 1), a("v-layout", [a("v-flex", {
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px"
                }
            }, [t._v("\n        " + t._s(t.$t("win.pre_period")) + "\n      ")]), a("div", {
                staticStyle: {
                    "margin-left": "12px",
                    "font-size": "22px"
                }
            }, [t._v(t._s(t.pre_period.period))])]), a("v-flex", {
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px auto"
                }
            }, [t._v(t._s(t.$t("win.result")))]), a("div", {
                class: t.pre_period.class,
                staticStyle: {
                    margin: "0 auto"
                }
            }, [t._v("\n        " + t._s(t.pre_period.last_num) + "\n      ")])]), a("v-flex", {
                staticStyle: {
                    "text-align": "right"
                },
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px 12px 10px 0"
                }
            }, [t._v(t._s(t.$t("win.open_price")))]), a("div", {
                class: t.pre_period.price_class,
                staticStyle: {
                    margin: "0 12px 0 0",
                    "font-size": "22px"
                }
            }, [t._v("\n        " + t._s(t.pre_period.price) + "\n      ")])])], 1), a("v-layout", {
                staticStyle: {
                    margin: "24px 0 24px 0"
                }
            }, [a("v-flex", {
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticClass: "red_title",
                staticStyle: {
                    "font-size": "18px",
                    margin: "0 auto"
                }
            }, [t._v(t._s(t.$t("win.red")) + ": " + t._s(t.red_count))])]), a("v-flex", {
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticClass: "green_title",
                staticStyle: {
                    "font-size": "18px",
                    margin: "0 auto"
                }
            }, [t._v(t._s(t.$t("win.green")) + ": " + t._s(t.green_count))])]), a("v-flex", {
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticClass: "violet_title",
                staticStyle: {
                    "font-size": "18px",
                    margin: "0 auto"
                }
            }, [t._v(t._s(t.$t("win.violet")) + ": " + t._s(t.violet_count))])])], 1), a("v-toolbar", {
                attrs: {
                    flat: "",
                    color: "white"
                }
            }, [a("v-spacer"), t.is_show_open_num ? a("v-btn", {
                staticStyle: {
                    color: "black",
                    "text-transform": "none"
                },
                attrs: {
                    color: "normal"
                },
                on: {
                    click: t.show_period
                }
            }, [t._v("\n      " + t._s(t.$t("win.show_period")) + "\n    ")]) : a("v-btn", {
                staticStyle: {
                    color: "white",
                    "text-transform": "none"
                },
                attrs: {
                    color: "teal"
                },
                on: {
                    click: t.show_period
                }
            }, [t._v("\n      " + t._s(t.$t("win.show_period")) + "\n    ")]), t.is_show_open_num ? a("v-btn", {
                staticStyle: {
                    color: "white",
                    "text-transform": "none"
                },
                attrs: {
                    color: "teal"
                },
                on: {
                    click: t.show_open_num
                }
            }, [t._v("\n      " + t._s(t.$t("win.show_open_num")) + "\n    ")]) : a("v-btn", {
                staticStyle: {
                    color: "black",
                    "text-transform": "none"
                },
                attrs: {
                    color: "normal"
                },
                on: {
                    click: t.show_open_num
                }
            }, [t._v("\n      " + t._s(t.$t("win.show_open_num")) + "\n    ")])], 1), a("v-data-table", {
                staticClass: "elevation-1",
                staticStyle: {
                    "padding-bottom": "24px"
                },
                attrs: {
                    items: t.desserts,
                    "hide-actions": "",
                    "hide-headers": ""
                },
                scopedSlots: t._u([{
                    key: "items",
                    fn: function(e) {
                        return [a("td", {
                            staticClass: "text-xs-center",
                            staticStyle: {
                                border: "solid rgba(0,0,0,.12)",
                                "border-width": "1px 1px 0 0"
                            }
                        }, [t._v(t._s(e.index + 1) + "\n      ")]), t._l(t.table_td_length, (function(i) {
                            return a("td", {
                                key: i,
                                staticClass: "text-xs-center",
                                staticStyle: {
                                    border: "solid rgba(0,0,0,.12)",
                                    "border-width": "1px 1px 0 0"
                                }
                            }, [e.item[i] ? a("div", {
                                class: e.item[i].class,
                                staticStyle: {
                                    margin: "0 auto"
                                }
                            }, [t.is_show_open_num ? a("span", [t._v(t._s(e.item[i].num))]) : a("span", [t._v(t._s(e.item[i].period))])]) : t._e()])
                        }
                        ))]
                    }
                }])
            }), a("v-tabs", {
                attrs: {
                    grow: "",
                    "slider-color": "teal"
                },
                model: {
                    value: t.rd_index,
                    callback: function(e) {
                        t.rd_index = e
                    },
                    expression: "rd_index"
                }
            }, t._l(6, (function(e) {
                return a("v-tab", {
                    key: e,
                    staticStyle: {
                        "text-transform": "none"
                    }
                }, [t._v("\n      Rd." + t._s(e + 2) + "\n    ")])
            }
            )), 1), a("v-data-table", {
                staticClass: "elevation-1",
                staticStyle: {
                    "padding-bottom": "24px"
                },
                attrs: {
                    items: t.multi_desserts,
                    "hide-actions": "",
                    "hide-headers": ""
                },
                scopedSlots: t._u([{
                    key: "items",
                    fn: function(e) {
                        return [a("td", {
                            staticClass: "text-xs-center",
                            staticStyle: {
                                border: "solid rgba(0,0,0,.12)",
                                "border-width": "1px 1px 0 0"
                            }
                        }, [t._v(t._s(e.index + 1) + "\n      ")]), t._l(t.multi_table_td_length, (function(i) {
                            return a("td", {
                                key: i,
                                staticClass: "text-xs-center",
                                staticStyle: {
                                    border: "solid rgba(0,0,0,.12)",
                                    "border-width": "1px 1px 0 0"
                                }
                            }, [e.item[i] ? a("div", {
                                class: e.item[i].class,
                                staticStyle: {
                                    margin: "0 auto"
                                }
                            }, [t.is_show_open_num ? a("span", [t._v(t._s(e.item[i].num))]) : a("span", [t._v(t._s(e.item[i].period))])]) : t._e()])
                        }
                        ))]
                    }
                }])
            }), a("div", {
                staticStyle: {
                    padding: "12px 24px 64px 24px"
                }
            }, [a("v-subheader", [t._v(t._s(t.$t("win.red")) + ": " + t._s(t.red_count))]), a("v-progress-linear", {
                attrs: {
                    color: "#f44336",
                    height: "15",
                    value: t.red_count / t.color_max * 100
                }
            }), a("v-subheader", [t._v(t._s(t.$t("win.green")) + ": " + t._s(t.green_count))]), a("v-progress-linear", {
                attrs: {
                    color: "#4caf50",
                    height: "15",
                    value: t.green_count / t.color_max * 100
                }
            }), a("v-subheader", [t._v(t._s(t.$t("win.violet")) + ": " + t._s(t.violet_count))]), a("v-progress-linear", {
                attrs: {
                    color: "#9c27b0",
                    height: "15",
                    value: t.violet_count / t.color_max * 100
                }
            }), t._l(10, (function(e) {
                return a("div", {
                    key: e
                }, [a("v-subheader", [t._v(t._s(t.$t("win.number")) + " " + t._s(e - 1) + ": " + t._s(t.number_count_dict[e - 1]))]), a("v-progress-linear", {
                    attrs: {
                        color: "#2197f3",
                        height: "15",
                        value: t.number_count_dict[e - 1] / t.color_max * 100
                    }
                })], 1)
            }
            ))], 2)], 1)
        }
          , Zi = []
          , tn = {
            created: function() {
                this.$store.state.show_bottom_menu = !1,
                this.load_next_period_info();
                var t = (new Date).getTime();
                this.$store.state.parity_count_down_tag = t,
                this.start_count_down(t),
                document.addEventListener("visibilitychange", this.auto_reload_listener)
            },
            destroyed: function() {
                document.removeEventListener("visibilitychange", this.auto_reload_listener)
            },
            watch: {
                rd_index: function() {
                    this.load_rd_table()
                }
            },
            methods: {
                auto_reload_listener: function() {
                    "hidden" === document.visibilityState && console.log("page hidden"),
                    "visible" === document.visibilityState && (console.log("page visible"),
                    this.load_next_period_info())
                },
                show_period: function() {
                    this.is_show_open_num = !1
                },
                show_open_num: function() {
                    this.is_show_open_num = !0
                },
                load_rd_table: function() {
                    this.multi_desserts = [];
                    var t = this.rd_values[this.rd_index]
                      , e = 0
                      , a = 1;
                    for (var i in this.periods) {
                        var n = this.periods[i]
                          , o = "";
                        o = n.is_violet ? n.is_green ? "item-violet-green" : "item-violet-red" : n.is_green ? "item-green" : "item-red";
                        var s = {
                            period: n.today_times,
                            num: n.last_num,
                            is_green: n.is_green,
                            is_red: n.is_red,
                            is_violet: n.is_violet,
                            class: o
                        };
                        this.multi_desserts.length <= e && this.multi_desserts.push({}),
                        this.multi_desserts[e][a] = s,
                        e += 1,
                        e >= t && (e = 0,
                        a += 1)
                    }
                    this.multi_table_td_length = a
                },
                load_next_period_info: function() {
                    var t = this
                      , e = "/win/next_period_info_noauth?category=P"
                      , a = Date.parse(new Date);
                    e += "&t=" + a,
                    tt.get(this, e, !1, (function(e, a) {
                        if (200 == a.data.code) {
                            e.next_period = a.data.next_period;
                            var i = a.data.periods;
                            if (e.periods = i,
                            null == i || 0 == i.length)
                                return;
                            e.load_rd_table();
                            var n = i[i.length - 1];
                            n.is_violet ? (n.price_class = "violet_title",
                            n.is_red ? n.class = "item-violet-red-big" : n.class = "item-violet-green-big") : n.is_red ? (n.price_class = "red_title",
                            n.class = "item-red-big") : (n.price_class = "green_title",
                            n.class = "item-green-big"),
                            e.pre_period = n,
                            e.desserts = [],
                            e.number_count_dict = {
                                0: 0,
                                1: 0,
                                2: 0,
                                3: 0,
                                4: 0,
                                5: 0,
                                6: 0,
                                7: 0,
                                8: 0,
                                9: 0
                            };
                            var o, s = 0, r = 0, l = 0, c = 0, d = 0, _ = 1, u = i[0];
                            for (var p in o = u.is_green ? "green" : "red",
                            i) {
                                var m = i[p];
                                e.number_count_dict[m.last_num] = e.number_count_dict[m.last_num] + 1,
                                "green" == o && m.is_green || "red" == o && m.is_red || (o = m.is_green ? "green" : "red",
                                d = 0,
                                _ += 1);
                                var v = "";
                                v = m.is_violet ? m.is_green ? "item-violet-green" : "item-violet-red" : m.is_green ? "item-green" : "item-red",
                                m.is_violet && (l += 1),
                                m.is_green && (r += 1),
                                m.is_red && (s += 1);
                                var h = {
                                    period: m.today_times,
                                    num: m.last_num,
                                    is_green: m.is_green,
                                    is_red: m.is_red,
                                    is_violet: m.is_violet,
                                    class: v
                                };
                                e.desserts.length <= d && e.desserts.push({}),
                                t.desserts[d][_] = h,
                                d += 1,
                                c < d && (c = d)
                            }
                            e.table_td_length = _,
                            e.red_count = s,
                            e.green_count = r,
                            e.violet_count = l,
                            e.color_max = s > r ? 2 * s : 2 * r
                        }
                    }
                    ))
                },
                continue_click: function() {
                    this.load_next_period_info(),
                    this.count_down_num_show = !0,
                    this.continue_button_show = !1,
                    this.continue_button_disabled = !0
                },
                start_count_down: function(t) {
                    if (this.$store.state.parity_count_down_tag == t) {
                        var e = Date.parse(new Date) / 1e3
                          , a = 180 - e % 180;
                        a <= 30 && (this.guess_button_disabled = !0);
                        var i = a / 60
                          , n = a % 60
                          , o = n / 10
                          , s = n % 10;
                        this.min_ten = "0",
                        this.min_bit = Math.floor(i),
                        this.sec_ten = Math.floor(o),
                        this.sec_bit = Math.floor(s);
                        var r = this;
                        setTimeout((function() {
                            r.start_count_down(t)
                        }
                        ), 1e3),
                        180 == a && (this.count_down_num_show = !1,
                        this.continue_button_show = !0,
                        setTimeout((function() {
                            r.continue_button_disabled = !1
                        }
                        ), 2500),
                        setTimeout((function() {
                            r.continue_button_show && r.continue_click()
                        }
                        ), 5500))
                    }
                }
            },
            data: function() {
                return {
                    color_max: 480,
                    rd_index: 0,
                    rd_values: [3, 4, 5, 6, 7, 8],
                    is_show_open_num: !0,
                    red_count: null,
                    green_count: null,
                    violet_count: null,
                    pre_period: {},
                    next_period: null,
                    periods: null,
                    count_down_num_show: !0,
                    continue_button_show: !1,
                    continue_button_disabled: !0,
                    min_ten: "",
                    min_bit: "",
                    sec_ten: "",
                    sec_bit: "",
                    table_td_length: 0,
                    multi_table_td_length: 0,
                    desserts: [],
                    multi_desserts: [],
                    number_count_dict: {}
                }
            }
        }
          , en = tn
          , an = (a("195f"),
        Object(d["a"])(en, Xi, Zi, !1, null, null, null))
          , nn = an.exports;
        u()(an, {
            VBtn: m["a"],
            VDataTable: $t["a"],
            VFlex: ct["a"],
            VLayout: g["a"],
            VProgressLinear: Ut["a"],
            VSpacer: M["a"],
            VSubheader: qe["a"],
            VTab: Mt["a"],
            VTabs: Gt["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var on = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-toolbar-title", [t._v(t._s(t.$t("win.sapre")))]), a("v-spacer")], 1), a("v-layout", {
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs6: "",
                    sm6: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px"
                }
            }, [t._v("\n        " + t._s(t.$t("win.period")) + "\n      ")]), a("div", {
                staticStyle: {
                    "margin-left": "12px",
                    "font-size": "22px"
                }
            }, [t._v(t._s(t.next_period))])]), a("v-flex", {
                staticStyle: {
                    "text-align": "right"
                },
                attrs: {
                    xs6: "",
                    sm6: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px 12px 10px 0"
                }
            }, [t._v(t._s(t.$t("win.count_down")))]), t.count_down_num_show ? a("div", {
                staticStyle: {
                    margin: "0 12px 0 0"
                }
            }, [a("span", {
                staticClass: "time-sub"
            }, [t._v(t._s(t.min_ten))]), a("span", {
                staticClass: "time-sub"
            }, [t._v(t._s(t.min_bit))]), a("span", {
                staticClass: "time-sub-dot"
            }, [t._v(":")]), a("span", {
                staticClass: "time-sub"
            }, [t._v(t._s(t.sec_ten))]), a("span", {
                staticClass: "time-sub"
            }, [t._v(t._s(t.sec_bit))])]) : t._e(), t.continue_button_show ? a("div", {
                staticStyle: {
                    margin: "0 12px 0 0"
                }
            }, [a("v-btn", {
                staticStyle: {
                    color: "white",
                    "text-transform": "none"
                },
                attrs: {
                    color: "orange",
                    disabled: t.continue_button_disabled
                },
                on: {
                    click: function(e) {
                        return t.continue_click()
                    }
                }
            }, [t._v(t._s(t.$t("main.continue")) + "\n        ")])], 1) : t._e()])], 1), a("v-layout", [a("v-flex", {
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px"
                }
            }, [t._v("\n        " + t._s(t.$t("win.pre_period")) + "\n      ")]), a("div", {
                staticStyle: {
                    "margin-left": "12px",
                    "font-size": "22px"
                }
            }, [t._v(t._s(t.pre_period.period))])]), a("v-flex", {
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px auto"
                }
            }, [t._v(t._s(t.$t("win.result")))]), a("div", {
                class: t.pre_period.class,
                staticStyle: {
                    margin: "0 auto"
                }
            }, [t._v("\n        " + t._s(t.pre_period.last_num) + "\n      ")])]), a("v-flex", {
                staticStyle: {
                    "text-align": "right"
                },
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px 12px 10px 0"
                }
            }, [t._v(t._s(t.$t("win.open_price")))]), a("div", {
                class: t.pre_period.price_class,
                staticStyle: {
                    margin: "0 12px 0 0",
                    "font-size": "22px"
                }
            }, [t._v("\n        " + t._s(t.pre_period.price) + "\n      ")])])], 1), a("v-layout", {
                staticStyle: {
                    margin: "24px 0 24px 0"
                }
            }, [a("v-flex", {
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticClass: "red_title",
                staticStyle: {
                    "font-size": "18px",
                    margin: "0 auto"
                }
            }, [t._v(t._s(t.$t("win.red")) + ": " + t._s(t.red_count))])]), a("v-flex", {
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticClass: "green_title",
                staticStyle: {
                    "font-size": "18px",
                    margin: "0 auto"
                }
            }, [t._v(t._s(t.$t("win.green")) + ": " + t._s(t.green_count))])]), a("v-flex", {
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticClass: "violet_title",
                staticStyle: {
                    "font-size": "18px",
                    margin: "0 auto"
                }
            }, [t._v(t._s(t.$t("win.violet")) + ": " + t._s(t.violet_count))])])], 1), a("v-toolbar", {
                attrs: {
                    flat: "",
                    color: "white"
                }
            }, [a("v-spacer"), t.is_show_open_num ? a("v-btn", {
                staticStyle: {
                    color: "black",
                    "text-transform": "none"
                },
                attrs: {
                    color: "normal"
                },
                on: {
                    click: t.show_period
                }
            }, [t._v("\n      " + t._s(t.$t("win.show_period")) + "\n    ")]) : a("v-btn", {
                staticStyle: {
                    color: "white",
                    "text-transform": "none"
                },
                attrs: {
                    color: "teal"
                },
                on: {
                    click: t.show_period
                }
            }, [t._v("\n      " + t._s(t.$t("win.show_period")) + "\n    ")]), t.is_show_open_num ? a("v-btn", {
                staticStyle: {
                    color: "white",
                    "text-transform": "none"
                },
                attrs: {
                    color: "teal"
                },
                on: {
                    click: t.show_open_num
                }
            }, [t._v("\n      " + t._s(t.$t("win.show_open_num")) + "\n    ")]) : a("v-btn", {
                staticStyle: {
                    color: "black",
                    "text-transform": "none"
                },
                attrs: {
                    color: "normal"
                },
                on: {
                    click: t.show_open_num
                }
            }, [t._v("\n      " + t._s(t.$t("win.show_open_num")) + "\n    ")])], 1), a("v-data-table", {
                staticClass: "elevation-1",
                staticStyle: {
                    "padding-bottom": "24px"
                },
                attrs: {
                    items: t.desserts,
                    "hide-actions": "",
                    "hide-headers": ""
                },
                scopedSlots: t._u([{
                    key: "items",
                    fn: function(e) {
                        return [a("td", {
                            staticClass: "text-xs-center",
                            staticStyle: {
                                border: "solid rgba(0,0,0,.12)",
                                "border-width": "1px 1px 0 0"
                            }
                        }, [t._v(t._s(e.index + 1) + "\n      ")]), t._l(t.table_td_length, (function(i) {
                            return a("td", {
                                key: i,
                                staticClass: "text-xs-center",
                                staticStyle: {
                                    border: "solid rgba(0,0,0,.12)",
                                    "border-width": "1px 1px 0 0"
                                }
                            }, [e.item[i] ? a("div", {
                                class: e.item[i].class,
                                staticStyle: {
                                    margin: "0 auto"
                                }
                            }, [t.is_show_open_num ? a("span", [t._v(t._s(e.item[i].num))]) : a("span", [t._v(t._s(e.item[i].period))])]) : t._e()])
                        }
                        ))]
                    }
                }])
            }), a("v-tabs", {
                attrs: {
                    grow: "",
                    "slider-color": "teal"
                },
                model: {
                    value: t.rd_index,
                    callback: function(e) {
                        t.rd_index = e
                    },
                    expression: "rd_index"
                }
            }, t._l(6, (function(e) {
                return a("v-tab", {
                    key: e,
                    staticStyle: {
                        "text-transform": "none"
                    }
                }, [t._v("\n      Rd." + t._s(e + 2) + "\n    ")])
            }
            )), 1), a("v-data-table", {
                staticClass: "elevation-1",
                staticStyle: {
                    "padding-bottom": "24px"
                },
                attrs: {
                    items: t.multi_desserts,
                    "hide-actions": "",
                    "hide-headers": ""
                },
                scopedSlots: t._u([{
                    key: "items",
                    fn: function(e) {
                        return [a("td", {
                            staticClass: "text-xs-center",
                            staticStyle: {
                                border: "solid rgba(0,0,0,.12)",
                                "border-width": "1px 1px 0 0"
                            }
                        }, [t._v(t._s(e.index + 1) + "\n      ")]), t._l(t.multi_table_td_length, (function(i) {
                            return a("td", {
                                key: i,
                                staticClass: "text-xs-center",
                                staticStyle: {
                                    border: "solid rgba(0,0,0,.12)",
                                    "border-width": "1px 1px 0 0"
                                }
                            }, [e.item[i] ? a("div", {
                                class: e.item[i].class,
                                staticStyle: {
                                    margin: "0 auto"
                                }
                            }, [t.is_show_open_num ? a("span", [t._v(t._s(e.item[i].num))]) : a("span", [t._v(t._s(e.item[i].period))])]) : t._e()])
                        }
                        ))]
                    }
                }])
            }), a("div", {
                staticStyle: {
                    padding: "12px 24px 64px 24px"
                }
            }, [a("v-subheader", [t._v(t._s(t.$t("win.red")) + ": " + t._s(t.red_count))]), a("v-progress-linear", {
                attrs: {
                    color: "#f44336",
                    height: "15",
                    value: t.red_count / t.color_max * 100
                }
            }), a("v-subheader", [t._v(t._s(t.$t("win.green")) + ": " + t._s(t.green_count))]), a("v-progress-linear", {
                attrs: {
                    color: "#4caf50",
                    height: "15",
                    value: t.green_count / t.color_max * 100
                }
            }), a("v-subheader", [t._v(t._s(t.$t("win.violet")) + ": " + t._s(t.violet_count))]), a("v-progress-linear", {
                attrs: {
                    color: "#9c27b0",
                    height: "15",
                    value: t.violet_count / t.color_max * 100
                }
            }), t._l(10, (function(e) {
                return a("div", {
                    key: e
                }, [a("v-subheader", [t._v(t._s(t.$t("win.number")) + " " + t._s(e - 1) + ": " + t._s(t.number_count_dict[e - 1]))]), a("v-progress-linear", {
                    attrs: {
                        color: "#2197f3",
                        height: "15",
                        value: t.number_count_dict[e - 1] / t.color_max * 100
                    }
                })], 1)
            }
            ))], 2)], 1)
        }
          , sn = []
          , rn = {
            created: function() {
                this.$store.state.show_bottom_menu = !1,
                this.load_next_period_info();
                var t = (new Date).getTime();
                this.$store.state.parity_count_down_tag = t,
                this.start_count_down(t),
                document.addEventListener("visibilitychange", this.auto_reload_listener)
            },
            destroyed: function() {
                document.removeEventListener("visibilitychange", this.auto_reload_listener)
            },
            watch: {
                rd_index: function() {
                    this.load_rd_table()
                }
            },
            methods: {
                auto_reload_listener: function() {
                    "hidden" === document.visibilityState && console.log("page hidden"),
                    "visible" === document.visibilityState && (console.log("page visible"),
                    this.load_next_period_info())
                },
                show_period: function() {
                    this.is_show_open_num = !1
                },
                show_open_num: function() {
                    this.is_show_open_num = !0
                },
                load_rd_table: function() {
                    this.multi_desserts = [];
                    var t = this.rd_values[this.rd_index]
                      , e = 0
                      , a = 1;
                    for (var i in this.periods) {
                        var n = this.periods[i]
                          , o = "";
                        o = n.is_violet ? n.is_green ? "item-violet-green" : "item-violet-red" : n.is_green ? "item-green" : "item-red";
                        var s = {
                            period: n.today_times,
                            num: n.last_num,
                            is_green: n.is_green,
                            is_red: n.is_red,
                            is_violet: n.is_violet,
                            class: o
                        };
                        this.multi_desserts.length <= e && this.multi_desserts.push({}),
                        this.multi_desserts[e][a] = s,
                        e += 1,
                        e >= t && (e = 0,
                        a += 1)
                    }
                    this.multi_table_td_length = a
                },
                load_next_period_info: function() {
                    var t = this
                      , e = "/win/next_period_info_noauth?category=S"
                      , a = Date.parse(new Date);
                    e += "&t=" + a,
                    tt.get(this, e, !1, (function(e, a) {
                        if (200 == a.data.code) {
                            e.next_period = a.data.next_period;
                            var i = a.data.periods;
                            if (e.periods = i,
                            null == i || 0 == i.length)
                                return;
                            e.load_rd_table();
                            var n = i[i.length - 1];
                            n.is_violet ? (n.price_class = "violet_title",
                            n.is_red ? n.class = "item-violet-red-big" : n.class = "item-violet-green-big") : n.is_red ? (n.price_class = "red_title",
                            n.class = "item-red-big") : (n.price_class = "green_title",
                            n.class = "item-green-big"),
                            e.pre_period = n,
                            e.desserts = [],
                            e.number_count_dict = {
                                0: 0,
                                1: 0,
                                2: 0,
                                3: 0,
                                4: 0,
                                5: 0,
                                6: 0,
                                7: 0,
                                8: 0,
                                9: 0
                            };
                            var o, s = 0, r = 0, l = 0, c = 0, d = 0, _ = 1, u = i[0];
                            for (var p in o = u.is_green ? "green" : "red",
                            i) {
                                var m = i[p];
                                e.number_count_dict[m.last_num] = e.number_count_dict[m.last_num] + 1,
                                "green" == o && m.is_green || "red" == o && m.is_red || (o = m.is_green ? "green" : "red",
                                d = 0,
                                _ += 1);
                                var v = "";
                                v = m.is_violet ? m.is_green ? "item-violet-green" : "item-violet-red" : m.is_green ? "item-green" : "item-red",
                                m.is_violet && (l += 1),
                                m.is_green && (r += 1),
                                m.is_red && (s += 1);
                                var h = {
                                    period: m.today_times,
                                    num: m.last_num,
                                    is_green: m.is_green,
                                    is_red: m.is_red,
                                    is_violet: m.is_violet,
                                    class: v
                                };
                                e.desserts.length <= d && e.desserts.push({}),
                                t.desserts[d][_] = h,
                                d += 1,
                                c < d && (c = d)
                            }
                            e.table_td_length = _,
                            e.red_count = s,
                            e.green_count = r,
                            e.violet_count = l,
                            e.color_max = s > r ? 2 * s : 2 * r
                        }
                    }
                    ))
                },
                continue_click: function() {
                    this.load_next_period_info(),
                    this.count_down_num_show = !0,
                    this.continue_button_show = !1,
                    this.continue_button_disabled = !0
                },
                start_count_down: function(t) {
                    if (this.$store.state.parity_count_down_tag == t) {
                        var e = Date.parse(new Date) / 1e3
                          , a = 180 - e % 180;
                        a <= 30 && (this.guess_button_disabled = !0);
                        var i = a / 60
                          , n = a % 60
                          , o = n / 10
                          , s = n % 10;
                        this.min_ten = "0",
                        this.min_bit = Math.floor(i),
                        this.sec_ten = Math.floor(o),
                        this.sec_bit = Math.floor(s);
                        var r = this;
                        setTimeout((function() {
                            r.start_count_down(t)
                        }
                        ), 1e3),
                        180 == a && (this.count_down_num_show = !1,
                        this.continue_button_show = !0,
                        setTimeout((function() {
                            r.continue_button_disabled = !1
                        }
                        ), 2500),
                        setTimeout((function() {
                            r.continue_button_show && r.continue_click()
                        }
                        ), 5500))
                    }
                }
            },
            data: function() {
                return {
                    color_max: 480,
                    rd_index: 0,
                    rd_values: [3, 4, 5, 6, 7, 8],
                    is_show_open_num: !0,
                    red_count: null,
                    green_count: null,
                    violet_count: null,
                    pre_period: {},
                    next_period: null,
                    periods: null,
                    count_down_num_show: !0,
                    continue_button_show: !1,
                    continue_button_disabled: !0,
                    min_ten: "",
                    min_bit: "",
                    sec_ten: "",
                    sec_bit: "",
                    table_td_length: 0,
                    multi_table_td_length: 0,
                    desserts: [],
                    multi_desserts: [],
                    number_count_dict: {}
                }
            }
        }
          , ln = rn
          , cn = (a("92a6"),
        Object(d["a"])(ln, on, sn, !1, null, null, null))
          , dn = cn.exports;
        u()(cn, {
            VBtn: m["a"],
            VDataTable: $t["a"],
            VFlex: ct["a"],
            VLayout: g["a"],
            VProgressLinear: Ut["a"],
            VSpacer: M["a"],
            VSubheader: qe["a"],
            VTab: Mt["a"],
            VTabs: Gt["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var _n = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-toolbar-title", [t._v(t._s(t.$t("win.bcone")))]), a("v-spacer")], 1), a("v-layout", {
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs6: "",
                    sm6: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px"
                }
            }, [t._v("\n        " + t._s(t.$t("win.period")) + "\n      ")]), a("div", {
                staticStyle: {
                    "margin-left": "12px",
                    "font-size": "22px"
                }
            }, [t._v(t._s(t.next_period))])]), a("v-flex", {
                staticStyle: {
                    "text-align": "right"
                },
                attrs: {
                    xs6: "",
                    sm6: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px 12px 10px 0"
                }
            }, [t._v(t._s(t.$t("win.count_down")))]), t.count_down_num_show ? a("div", {
                staticStyle: {
                    margin: "0 12px 0 0"
                }
            }, [a("span", {
                staticClass: "time-sub"
            }, [t._v(t._s(t.min_ten))]), a("span", {
                staticClass: "time-sub"
            }, [t._v(t._s(t.min_bit))]), a("span", {
                staticClass: "time-sub-dot"
            }, [t._v(":")]), a("span", {
                staticClass: "time-sub"
            }, [t._v(t._s(t.sec_ten))]), a("span", {
                staticClass: "time-sub"
            }, [t._v(t._s(t.sec_bit))])]) : t._e(), t.continue_button_show ? a("div", {
                staticStyle: {
                    margin: "0 12px 0 0"
                }
            }, [a("v-btn", {
                staticStyle: {
                    color: "white",
                    "text-transform": "none"
                },
                attrs: {
                    color: "orange",
                    disabled: t.continue_button_disabled
                },
                on: {
                    click: function(e) {
                        return t.continue_click()
                    }
                }
            }, [t._v(t._s(t.$t("main.continue")) + "\n        ")])], 1) : t._e()])], 1), a("v-layout", [a("v-flex", {
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px"
                }
            }, [t._v("\n        " + t._s(t.$t("win.pre_period")) + "\n      ")]), a("div", {
                staticStyle: {
                    "margin-left": "12px",
                    "font-size": "22px"
                }
            }, [t._v(t._s(t.pre_period.period))])]), a("v-flex", {
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px auto"
                }
            }, [t._v(t._s(t.$t("win.result")))]), a("div", {
                class: t.pre_period.class,
                staticStyle: {
                    margin: "0 auto"
                }
            }, [t._v("\n        " + t._s(t.pre_period.last_num) + "\n      ")])]), a("v-flex", {
                staticStyle: {
                    "text-align": "right"
                },
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px 12px 10px 0"
                }
            }, [t._v(t._s(t.$t("win.open_price")))]), a("div", {
                class: t.pre_period.price_class,
                staticStyle: {
                    margin: "0 12px 0 0",
                    "font-size": "22px"
                }
            }, [t._v("\n        " + t._s(t.pre_period.price) + "\n      ")])])], 1), a("v-layout", {
                staticStyle: {
                    margin: "24px 0 24px 0"
                }
            }, [a("v-flex", {
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticClass: "red_title",
                staticStyle: {
                    "font-size": "18px",
                    margin: "0 auto"
                }
            }, [t._v(t._s(t.$t("win.red")) + ": " + t._s(t.red_count))])]), a("v-flex", {
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticClass: "green_title",
                staticStyle: {
                    "font-size": "18px",
                    margin: "0 auto"
                }
            }, [t._v(t._s(t.$t("win.green")) + ": " + t._s(t.green_count))])]), a("v-flex", {
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticClass: "violet_title",
                staticStyle: {
                    "font-size": "18px",
                    margin: "0 auto"
                }
            }, [t._v(t._s(t.$t("win.violet")) + ": " + t._s(t.violet_count))])])], 1), a("v-toolbar", {
                attrs: {
                    flat: "",
                    color: "white"
                }
            }, [a("v-spacer"), t.is_show_open_num ? a("v-btn", {
                staticStyle: {
                    color: "black",
                    "text-transform": "none"
                },
                attrs: {
                    color: "normal"
                },
                on: {
                    click: t.show_period
                }
            }, [t._v("\n      " + t._s(t.$t("win.show_period")) + "\n    ")]) : a("v-btn", {
                staticStyle: {
                    color: "white",
                    "text-transform": "none"
                },
                attrs: {
                    color: "teal"
                },
                on: {
                    click: t.show_period
                }
            }, [t._v("\n      " + t._s(t.$t("win.show_period")) + "\n    ")]), t.is_show_open_num ? a("v-btn", {
                staticStyle: {
                    color: "white",
                    "text-transform": "none"
                },
                attrs: {
                    color: "teal"
                },
                on: {
                    click: t.show_open_num
                }
            }, [t._v("\n      " + t._s(t.$t("win.show_open_num")) + "\n    ")]) : a("v-btn", {
                staticStyle: {
                    color: "black",
                    "text-transform": "none"
                },
                attrs: {
                    color: "normal"
                },
                on: {
                    click: t.show_open_num
                }
            }, [t._v("\n      " + t._s(t.$t("win.show_open_num")) + "\n    ")])], 1), a("v-data-table", {
                staticClass: "elevation-1",
                staticStyle: {
                    "padding-bottom": "24px"
                },
                attrs: {
                    items: t.desserts,
                    "hide-actions": "",
                    "hide-headers": ""
                },
                scopedSlots: t._u([{
                    key: "items",
                    fn: function(e) {
                        return [a("td", {
                            staticClass: "text-xs-center",
                            staticStyle: {
                                border: "solid rgba(0,0,0,.12)",
                                "border-width": "1px 1px 0 0"
                            }
                        }, [t._v(t._s(e.index + 1) + "\n      ")]), t._l(t.table_td_length, (function(i) {
                            return a("td", {
                                key: i,
                                staticClass: "text-xs-center",
                                staticStyle: {
                                    border: "solid rgba(0,0,0,.12)",
                                    "border-width": "1px 1px 0 0"
                                }
                            }, [e.item[i] ? a("div", {
                                class: e.item[i].class,
                                staticStyle: {
                                    margin: "0 auto"
                                }
                            }, [t.is_show_open_num ? a("span", [t._v(t._s(e.item[i].num))]) : a("span", [t._v(t._s(e.item[i].period))])]) : t._e()])
                        }
                        ))]
                    }
                }])
            }), a("v-tabs", {
                attrs: {
                    grow: "",
                    "slider-color": "teal"
                },
                model: {
                    value: t.rd_index,
                    callback: function(e) {
                        t.rd_index = e
                    },
                    expression: "rd_index"
                }
            }, t._l(6, (function(e) {
                return a("v-tab", {
                    key: e,
                    staticStyle: {
                        "text-transform": "none"
                    }
                }, [t._v("\n      Rd." + t._s(e + 2) + "\n    ")])
            }
            )), 1), a("v-data-table", {
                staticClass: "elevation-1",
                staticStyle: {
                    "padding-bottom": "24px"
                },
                attrs: {
                    items: t.multi_desserts,
                    "hide-actions": "",
                    "hide-headers": ""
                },
                scopedSlots: t._u([{
                    key: "items",
                    fn: function(e) {
                        return [a("td", {
                            staticClass: "text-xs-center",
                            staticStyle: {
                                border: "solid rgba(0,0,0,.12)",
                                "border-width": "1px 1px 0 0"
                            }
                        }, [t._v(t._s(e.index + 1) + "\n      ")]), t._l(t.multi_table_td_length, (function(i) {
                            return a("td", {
                                key: i,
                                staticClass: "text-xs-center",
                                staticStyle: {
                                    border: "solid rgba(0,0,0,.12)",
                                    "border-width": "1px 1px 0 0"
                                }
                            }, [e.item[i] ? a("div", {
                                class: e.item[i].class,
                                staticStyle: {
                                    margin: "0 auto"
                                }
                            }, [t.is_show_open_num ? a("span", [t._v(t._s(e.item[i].num))]) : a("span", [t._v(t._s(e.item[i].period))])]) : t._e()])
                        }
                        ))]
                    }
                }])
            }), a("div", {
                staticStyle: {
                    padding: "12px 24px 64px 24px"
                }
            }, [a("v-subheader", [t._v(t._s(t.$t("win.red")) + ": " + t._s(t.red_count))]), a("v-progress-linear", {
                attrs: {
                    color: "#f44336",
                    height: "15",
                    value: t.red_count / t.color_max * 100
                }
            }), a("v-subheader", [t._v(t._s(t.$t("win.green")) + ": " + t._s(t.green_count))]), a("v-progress-linear", {
                attrs: {
                    color: "#4caf50",
                    height: "15",
                    value: t.green_count / t.color_max * 100
                }
            }), a("v-subheader", [t._v(t._s(t.$t("win.violet")) + ": " + t._s(t.violet_count))]), a("v-progress-linear", {
                attrs: {
                    color: "#9c27b0",
                    height: "15",
                    value: t.violet_count / t.color_max * 100
                }
            }), t._l(10, (function(e) {
                return a("div", {
                    key: e
                }, [a("v-subheader", [t._v(t._s(t.$t("win.number")) + " " + t._s(e - 1) + ": " + t._s(t.number_count_dict[e - 1]))]), a("v-progress-linear", {
                    attrs: {
                        color: "#2197f3",
                        height: "15",
                        value: t.number_count_dict[e - 1] / t.color_max * 100
                    }
                })], 1)
            }
            ))], 2)], 1)
        }
          , un = []
          , pn = {
            created: function() {
                this.$store.state.show_bottom_menu = !1,
                this.load_next_period_info();
                var t = (new Date).getTime();
                this.$store.state.parity_count_down_tag = t,
                this.start_count_down(t),
                document.addEventListener("visibilitychange", this.auto_reload_listener)
            },
            destroyed: function() {
                document.removeEventListener("visibilitychange", this.auto_reload_listener)
            },
            watch: {
                rd_index: function() {
                    this.load_rd_table()
                }
            },
            methods: {
                auto_reload_listener: function() {
                    "hidden" === document.visibilityState && console.log("page hidden"),
                    "visible" === document.visibilityState && (console.log("page visible"),
                    this.load_next_period_info())
                },
                show_period: function() {
                    this.is_show_open_num = !1
                },
                show_open_num: function() {
                    this.is_show_open_num = !0
                },
                load_rd_table: function() {
                    this.multi_desserts = [];
                    var t = this.rd_values[this.rd_index]
                      , e = 0
                      , a = 1;
                    for (var i in this.periods) {
                        var n = this.periods[i]
                          , o = "";
                        o = n.is_violet ? n.is_green ? "item-violet-green" : "item-violet-red" : n.is_green ? "item-green" : "item-red";
                        var s = {
                            period: n.today_times,
                            num: n.last_num,
                            is_green: n.is_green,
                            is_red: n.is_red,
                            is_violet: n.is_violet,
                            class: o
                        };
                        this.multi_desserts.length <= e && this.multi_desserts.push({}),
                        this.multi_desserts[e][a] = s,
                        e += 1,
                        e >= t && (e = 0,
                        a += 1)
                    }
                    this.multi_table_td_length = a
                },
                load_next_period_info: function() {
                    var t = this
                      , e = "/win/next_period_info_noauth?category=B"
                      , a = Date.parse(new Date);
                    e += "&t=" + a,
                    tt.get(this, e, !1, (function(e, a) {
                        if (200 == a.data.code) {
                            e.next_period = a.data.next_period;
                            var i = a.data.periods;
                            if (e.periods = i,
                            null == i || 0 == i.length)
                                return;
                            e.load_rd_table();
                            var n = i[i.length - 1];
                            n.is_violet ? (n.price_class = "violet_title",
                            n.is_red ? n.class = "item-violet-red-big" : n.class = "item-violet-green-big") : n.is_red ? (n.price_class = "red_title",
                            n.class = "item-red-big") : (n.price_class = "green_title",
                            n.class = "item-green-big"),
                            e.pre_period = n,
                            e.desserts = [],
                            e.number_count_dict = {
                                0: 0,
                                1: 0,
                                2: 0,
                                3: 0,
                                4: 0,
                                5: 0,
                                6: 0,
                                7: 0,
                                8: 0,
                                9: 0
                            };
                            var o, s = 0, r = 0, l = 0, c = 0, d = 0, _ = 1, u = i[0];
                            for (var p in o = u.is_green ? "green" : "red",
                            i) {
                                var m = i[p];
                                e.number_count_dict[m.last_num] = e.number_count_dict[m.last_num] + 1,
                                "green" == o && m.is_green || "red" == o && m.is_red || (o = m.is_green ? "green" : "red",
                                d = 0,
                                _ += 1);
                                var v = "";
                                v = m.is_violet ? m.is_green ? "item-violet-green" : "item-violet-red" : m.is_green ? "item-green" : "item-red",
                                m.is_violet && (l += 1),
                                m.is_green && (r += 1),
                                m.is_red && (s += 1);
                                var h = {
                                    period: m.today_times,
                                    num: m.last_num,
                                    is_green: m.is_green,
                                    is_red: m.is_red,
                                    is_violet: m.is_violet,
                                    class: v
                                };
                                e.desserts.length <= d && e.desserts.push({}),
                                t.desserts[d][_] = h,
                                d += 1,
                                c < d && (c = d)
                            }
                            e.table_td_length = _,
                            e.red_count = s,
                            e.green_count = r,
                            e.violet_count = l,
                            e.color_max = s > r ? 2 * s : 2 * r
                        }
                    }
                    ))
                },
                continue_click: function() {
                    this.load_next_period_info(),
                    this.count_down_num_show = !0,
                    this.continue_button_show = !1,
                    this.continue_button_disabled = !0
                },
                start_count_down: function(t) {
                    if (this.$store.state.parity_count_down_tag == t) {
                        var e = Date.parse(new Date) / 1e3
                          , a = 180 - e % 180;
                        a <= 30 && (this.guess_button_disabled = !0);
                        var i = a / 60
                          , n = a % 60
                          , o = n / 10
                          , s = n % 10;
                        this.min_ten = "0",
                        this.min_bit = Math.floor(i),
                        this.sec_ten = Math.floor(o),
                        this.sec_bit = Math.floor(s);
                        var r = this;
                        setTimeout((function() {
                            r.start_count_down(t)
                        }
                        ), 1e3),
                        180 == a && (this.count_down_num_show = !1,
                        this.continue_button_show = !0,
                        setTimeout((function() {
                            r.continue_button_disabled = !1
                        }
                        ), 2500),
                        setTimeout((function() {
                            r.continue_button_show && r.continue_click()
                        }
                        ), 5500))
                    }
                }
            },
            data: function() {
                return {
                    color_max: 480,
                    rd_index: 0,
                    rd_values: [3, 4, 5, 6, 7, 8],
                    is_show_open_num: !0,
                    red_count: null,
                    green_count: null,
                    violet_count: null,
                    pre_period: {},
                    next_period: null,
                    periods: null,
                    count_down_num_show: !0,
                    continue_button_show: !1,
                    continue_button_disabled: !0,
                    min_ten: "",
                    min_bit: "",
                    sec_ten: "",
                    sec_bit: "",
                    table_td_length: 0,
                    multi_table_td_length: 0,
                    desserts: [],
                    multi_desserts: [],
                    number_count_dict: {}
                }
            }
        }
          , mn = pn
          , vn = (a("50d7"),
        Object(d["a"])(mn, _n, un, !1, null, null, null))
          , hn = vn.exports;
        u()(vn, {
            VBtn: m["a"],
            VDataTable: $t["a"],
            VFlex: ct["a"],
            VLayout: g["a"],
            VProgressLinear: Ut["a"],
            VSpacer: M["a"],
            VSubheader: qe["a"],
            VTab: Mt["a"],
            VTabs: Gt["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        });
        var gn = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [a("v-toolbar", {
                attrs: {
                    color: "teal",
                    dark: "",
                    tabs: ""
                }
            }, [a("v-toolbar-title", [t._v(t._s(t.$t("win.emerd")))]), a("v-spacer")], 1), a("v-layout", {
                attrs: {
                    "justify-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs6: "",
                    sm6: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px"
                }
            }, [t._v("\n        " + t._s(t.$t("win.period")) + "\n      ")]), a("div", {
                staticStyle: {
                    "margin-left": "12px",
                    "font-size": "22px"
                }
            }, [t._v(t._s(t.next_period))])]), a("v-flex", {
                staticStyle: {
                    "text-align": "right"
                },
                attrs: {
                    xs6: "",
                    sm6: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px 12px 10px 0"
                }
            }, [t._v(t._s(t.$t("win.count_down")))]), t.count_down_num_show ? a("div", {
                staticStyle: {
                    margin: "0 12px 0 0"
                }
            }, [a("span", {
                staticClass: "time-sub"
            }, [t._v(t._s(t.min_ten))]), a("span", {
                staticClass: "time-sub"
            }, [t._v(t._s(t.min_bit))]), a("span", {
                staticClass: "time-sub-dot"
            }, [t._v(":")]), a("span", {
                staticClass: "time-sub"
            }, [t._v(t._s(t.sec_ten))]), a("span", {
                staticClass: "time-sub"
            }, [t._v(t._s(t.sec_bit))])]) : t._e(), t.continue_button_show ? a("div", {
                staticStyle: {
                    margin: "0 12px 0 0"
                }
            }, [a("v-btn", {
                staticStyle: {
                    color: "white",
                    "text-transform": "none"
                },
                attrs: {
                    color: "orange",
                    disabled: t.continue_button_disabled
                },
                on: {
                    click: function(e) {
                        return t.continue_click()
                    }
                }
            }, [t._v(t._s(t.$t("main.continue")) + "\n        ")])], 1) : t._e()])], 1), a("v-layout", [a("v-flex", {
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px"
                }
            }, [t._v("\n        " + t._s(t.$t("win.pre_period")) + "\n      ")]), a("div", {
                staticStyle: {
                    "margin-left": "12px",
                    "font-size": "22px"
                }
            }, [t._v(t._s(t.pre_period.period))])]), a("v-flex", {
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px auto"
                }
            }, [t._v(t._s(t.$t("win.result")))]), a("div", {
                class: t.pre_period.class,
                staticStyle: {
                    margin: "0 auto"
                }
            }, [t._v("\n        " + t._s(t.pre_period.last_num) + "\n      ")])]), a("v-flex", {
                staticStyle: {
                    "text-align": "right"
                },
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticStyle: {
                    "font-size": "18px",
                    color: "#7d7d7d",
                    margin: "12px 12px 10px 0"
                }
            }, [t._v(t._s(t.$t("win.open_price")))]), a("div", {
                class: t.pre_period.price_class,
                staticStyle: {
                    margin: "0 12px 0 0",
                    "font-size": "22px"
                }
            }, [t._v("\n        " + t._s(t.pre_period.price) + "\n      ")])])], 1), a("v-layout", {
                staticStyle: {
                    margin: "24px 0 24px 0"
                }
            }, [a("v-flex", {
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticClass: "red_title",
                staticStyle: {
                    "font-size": "18px",
                    margin: "0 auto"
                }
            }, [t._v(t._s(t.$t("win.red")) + ": " + t._s(t.red_count))])]), a("v-flex", {
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticClass: "green_title",
                staticStyle: {
                    "font-size": "18px",
                    margin: "0 auto"
                }
            }, [t._v(t._s(t.$t("win.green")) + ": " + t._s(t.green_count))])]), a("v-flex", {
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    xs4: "",
                    sm4: ""
                }
            }, [a("div", {
                staticClass: "violet_title",
                staticStyle: {
                    "font-size": "18px",
                    margin: "0 auto"
                }
            }, [t._v(t._s(t.$t("win.violet")) + ": " + t._s(t.violet_count))])])], 1), a("v-toolbar", {
                attrs: {
                    flat: "",
                    color: "white"
                }
            }, [a("v-spacer"), t.is_show_open_num ? a("v-btn", {
                staticStyle: {
                    color: "black",
                    "text-transform": "none"
                },
                attrs: {
                    color: "normal"
                },
                on: {
                    click: t.show_period
                }
            }, [t._v("\n      " + t._s(t.$t("win.show_period")) + "\n    ")]) : a("v-btn", {
                staticStyle: {
                    color: "white",
                    "text-transform": "none"
                },
                attrs: {
                    color: "teal"
                },
                on: {
                    click: t.show_period
                }
            }, [t._v("\n      " + t._s(t.$t("win.show_period")) + "\n    ")]), t.is_show_open_num ? a("v-btn", {
                staticStyle: {
                    color: "white",
                    "text-transform": "none"
                },
                attrs: {
                    color: "teal"
                },
                on: {
                    click: t.show_open_num
                }
            }, [t._v("\n      " + t._s(t.$t("win.show_open_num")) + "\n    ")]) : a("v-btn", {
                staticStyle: {
                    color: "black",
                    "text-transform": "none"
                },
                attrs: {
                    color: "normal"
                },
                on: {
                    click: t.show_open_num
                }
            }, [t._v("\n      " + t._s(t.$t("win.show_open_num")) + "\n    ")])], 1), a("v-data-table", {
                staticClass: "elevation-1",
                staticStyle: {
                    "padding-bottom": "24px"
                },
                attrs: {
                    items: t.desserts,
                    "hide-actions": "",
                    "hide-headers": ""
                },
                scopedSlots: t._u([{
                    key: "items",
                    fn: function(e) {
                        return [a("td", {
                            staticClass: "text-xs-center",
                            staticStyle: {
                                border: "solid rgba(0,0,0,.12)",
                                "border-width": "1px 1px 0 0"
                            }
                        }, [t._v(t._s(e.index + 1) + "\n      ")]), t._l(t.table_td_length, (function(i) {
                            return a("td", {
                                key: i,
                                staticClass: "text-xs-center",
                                staticStyle: {
                                    border: "solid rgba(0,0,0,.12)",
                                    "border-width": "1px 1px 0 0"
                                }
                            }, [e.item[i] ? a("div", {
                                class: e.item[i].class,
                                staticStyle: {
                                    margin: "0 auto"
                                }
                            }, [t.is_show_open_num ? a("span", [t._v(t._s(e.item[i].num))]) : a("span", [t._v(t._s(e.item[i].period))])]) : t._e()])
                        }
                        ))]
                    }
                }])
            }), a("v-tabs", {
                attrs: {
                    grow: "",
                    "slider-color": "teal"
                },
                model: {
                    value: t.rd_index,
                    callback: function(e) {
                        t.rd_index = e
                    },
                    expression: "rd_index"
                }
            }, t._l(6, (function(e) {
                return a("v-tab", {
                    key: e,
                    staticStyle: {
                        "text-transform": "none"
                    }
                }, [t._v("\n      Rd." + t._s(e + 2) + "\n    ")])
            }
            )), 1), a("v-data-table", {
                staticClass: "elevation-1",
                staticStyle: {
                    "padding-bottom": "24px"
                },
                attrs: {
                    items: t.multi_desserts,
                    "hide-actions": "",
                    "hide-headers": ""
                },
                scopedSlots: t._u([{
                    key: "items",
                    fn: function(e) {
                        return [a("td", {
                            staticClass: "text-xs-center",
                            staticStyle: {
                                border: "solid rgba(0,0,0,.12)",
                                "border-width": "1px 1px 0 0"
                            }
                        }, [t._v(t._s(e.index + 1) + "\n      ")]), t._l(t.multi_table_td_length, (function(i) {
                            return a("td", {
                                key: i,
                                staticClass: "text-xs-center",
                                staticStyle: {
                                    border: "solid rgba(0,0,0,.12)",
                                    "border-width": "1px 1px 0 0"
                                }
                            }, [e.item[i] ? a("div", {
                                class: e.item[i].class,
                                staticStyle: {
                                    margin: "0 auto"
                                }
                            }, [t.is_show_open_num ? a("span", [t._v(t._s(e.item[i].num))]) : a("span", [t._v(t._s(e.item[i].period))])]) : t._e()])
                        }
                        ))]
                    }
                }])
            }), a("div", {
                staticStyle: {
                    padding: "12px 24px 64px 24px"
                }
            }, [a("v-subheader", [t._v(t._s(t.$t("win.red")) + ": " + t._s(t.red_count))]), a("v-progress-linear", {
                attrs: {
                    color: "#f44336",
                    height: "15",
                    value: t.red_count / t.color_max * 100
                }
            }), a("v-subheader", [t._v(t._s(t.$t("win.green")) + ": " + t._s(t.green_count))]), a("v-progress-linear", {
                attrs: {
                    color: "#4caf50",
                    height: "15",
                    value: t.green_count / t.color_max * 100
                }
            }), a("v-subheader", [t._v(t._s(t.$t("win.violet")) + ": " + t._s(t.violet_count))]), a("v-progress-linear", {
                attrs: {
                    color: "#9c27b0",
                    height: "15",
                    value: t.violet_count / t.color_max * 100
                }
            }), t._l(10, (function(e) {
                return a("div", {
                    key: e
                }, [a("v-subheader", [t._v(t._s(t.$t("win.number")) + " " + t._s(e - 1) + ": " + t._s(t.number_count_dict[e - 1]))]), a("v-progress-linear", {
                    attrs: {
                        color: "#2197f3",
                        height: "15",
                        value: t.number_count_dict[e - 1] / t.color_max * 100
                    }
                })], 1)
            }
            ))], 2)], 1)
        }
          , fn = []
          , yn = {
            created: function() {
                this.$store.state.show_bottom_menu = !1,
                this.load_next_period_info();
                var t = (new Date).getTime();
                this.$store.state.parity_count_down_tag = t,
                this.start_count_down(t),
                document.addEventListener("visibilitychange", this.auto_reload_listener)
            },
            destroyed: function() {
                document.removeEventListener("visibilitychange", this.auto_reload_listener)
            },
            watch: {
                rd_index: function() {
                    this.load_rd_table()
                }
            },
            methods: {
                auto_reload_listener: function() {
                    "hidden" === document.visibilityState && console.log("page hidden"),
                    "visible" === document.visibilityState && (console.log("page visible"),
                    this.load_next_period_info())
                },
                show_period: function() {
                    this.is_show_open_num = !1
                },
                show_open_num: function() {
                    this.is_show_open_num = !0
                },
                load_rd_table: function() {
                    this.multi_desserts = [];
                    var t = this.rd_values[this.rd_index]
                      , e = 0
                      , a = 1;
                    for (var i in this.periods) {
                        var n = this.periods[i]
                          , o = "";
                        o = n.is_violet ? n.is_green ? "item-violet-green" : "item-violet-red" : n.is_green ? "item-green" : "item-red";
                        var s = {
                            period: n.today_times,
                            num: n.last_num,
                            is_green: n.is_green,
                            is_red: n.is_red,
                            is_violet: n.is_violet,
                            class: o
                        };
                        this.multi_desserts.length <= e && this.multi_desserts.push({}),
                        this.multi_desserts[e][a] = s,
                        e += 1,
                        e >= t && (e = 0,
                        a += 1)
                    }
                    this.multi_table_td_length = a
                },
                load_next_period_info: function() {
                    var t = this
                      , e = "/win/next_period_info_noauth?category=E"
                      , a = Date.parse(new Date);
                    e += "&t=" + a,
                    tt.get(this, e, !1, (function(e, a) {
                        if (200 == a.data.code) {
                            e.next_period = a.data.next_period;
                            var i = a.data.periods;
                            if (e.periods = i,
                            null == i || 0 == i.length)
                                return;
                            e.load_rd_table();
                            var n = i[i.length - 1];
                            n.is_violet ? (n.price_class = "violet_title",
                            n.is_red ? n.class = "item-violet-red-big" : n.class = "item-violet-green-big") : n.is_red ? (n.price_class = "red_title",
                            n.class = "item-red-big") : (n.price_class = "green_title",
                            n.class = "item-green-big"),
                            e.pre_period = n,
                            e.desserts = [],
                            e.number_count_dict = {
                                0: 0,
                                1: 0,
                                2: 0,
                                3: 0,
                                4: 0,
                                5: 0,
                                6: 0,
                                7: 0,
                                8: 0,
                                9: 0
                            };
                            var o, s = 0, r = 0, l = 0, c = 0, d = 0, _ = 1, u = i[0];
                            for (var p in o = u.is_green ? "green" : "red",
                            i) {
                                var m = i[p];
                                e.number_count_dict[m.last_num] = e.number_count_dict[m.last_num] + 1,
                                "green" == o && m.is_green || "red" == o && m.is_red || (o = m.is_green ? "green" : "red",
                                d = 0,
                                _ += 1);
                                var v = "";
                                v = m.is_violet ? m.is_green ? "item-violet-green" : "item-violet-red" : m.is_green ? "item-green" : "item-red",
                                m.is_violet && (l += 1),
                                m.is_green && (r += 1),
                                m.is_red && (s += 1);
                                var h = {
                                    period: m.today_times,
                                    num: m.last_num,
                                    is_green: m.is_green,
                                    is_red: m.is_red,
                                    is_violet: m.is_violet,
                                    class: v
                                };
                                e.desserts.length <= d && e.desserts.push({}),
                                t.desserts[d][_] = h,
                                d += 1,
                                c < d && (c = d)
                            }
                            e.table_td_length = _,
                            e.red_count = s,
                            e.green_count = r,
                            e.violet_count = l,
                            e.color_max = s > r ? 2 * s : 2 * r
                        }
                    }
                    ))
                },
                continue_click: function() {
                    this.load_next_period_info(),
                    this.count_down_num_show = !0,
                    this.continue_button_show = !1,
                    this.continue_button_disabled = !0
                },
                start_count_down: function(t) {
                    if (this.$store.state.parity_count_down_tag == t) {
                        var e = Date.parse(new Date) / 1e3
                          , a = 180 - e % 180;
                        a <= 30 && (this.guess_button_disabled = !0);
                        var i = a / 60
                          , n = a % 60
                          , o = n / 10
                          , s = n % 10;
                        this.min_ten = "0",
                        this.min_bit = Math.floor(i),
                        this.sec_ten = Math.floor(o),
                        this.sec_bit = Math.floor(s);
                        var r = this;
                        setTimeout((function() {
                            r.start_count_down(t)
                        }
                        ), 1e3),
                        180 == a && (this.count_down_num_show = !1,
                        this.continue_button_show = !0,
                        setTimeout((function() {
                            r.continue_button_disabled = !1
                        }
                        ), 2500),
                        setTimeout((function() {
                            r.continue_button_show && r.continue_click()
                        }
                        ), 5500))
                    }
                }
            },
            data: function() {
                return {
                    color_max: 480,
                    rd_index: 0,
                    rd_values: [3, 4, 5, 6, 7, 8],
                    is_show_open_num: !0,
                    red_count: null,
                    green_count: null,
                    violet_count: null,
                    pre_period: {},
                    next_period: null,
                    periods: null,
                    count_down_num_show: !0,
                    continue_button_show: !1,
                    continue_button_disabled: !0,
                    min_ten: "",
                    min_bit: "",
                    sec_ten: "",
                    sec_bit: "",
                    table_td_length: 0,
                    multi_table_td_length: 0,
                    desserts: [],
                    multi_desserts: [],
                    number_count_dict: {}
                }
            }
        }
          , bn = yn
          , xn = (a("a25b"),
        Object(d["a"])(bn, gn, fn, !1, null, null, null))
          , wn = xn.exports;
        u()(xn, {
            VBtn: m["a"],
            VDataTable: $t["a"],
            VFlex: ct["a"],
            VLayout: g["a"],
            VProgressLinear: Ut["a"],
            VSpacer: M["a"],
            VSubheader: qe["a"],
            VTab: Mt["a"],
            VTabs: Gt["a"],
            VToolbar: F["a"],
            VToolbarTitle: G["a"]
        }),
        i["default"].use(j["a"]);
        var kn = [{
            path: "/",
            name: "Home",
            component: pt
        }, {
            path: "/search",
            name: "Search",
            component: bt
        }, {
            path: "/item",
            name: "Item",
            component: Vt
        }, {
            path: "/win",
            name: "Win",
            component: Jt
        }, {
            path: "/my",
            name: "My",
            component: ie
        }, {
            path: "/login",
            name: "Login",
            component: de
        }, {
            path: "/resetPassword",
            name: "ResetPassword",
            component: he
        }, {
            path: "/register",
            name: "Register",
            component: we
        }, {
            path: "/orderList",
            name: "OrderList",
            component: Ae
        }, {
            path: "/recharge",
            name: "Recharge",
            component: Oe
        }, {
            path: "/bankcardList",
            name: "BankCardList",
            component: He
        }, {
            path: "/editBankcard",
            name: "EditBankCard",
            component: ta
        }, {
            path: "/addressList",
            name: "AddressList",
            component: sa
        }, {
            path: "/editAddress",
            name: "EditAddress",
            component: pa
        }, {
            path: "/privacyPolicy",
            name: "PrivacyPolicy",
            component: ya
        }, {
            path: "/riskAgreement",
            name: "RiskAgreement",
            component: $a
        }, {
            path: "/buy",
            name: "Buy",
            component: Te
        }, {
            path: "/guessRecord",
            name: "GuessRecord",
            component: Ia
        }, {
            path: "/myGuessRecord",
            name: "MyGuessRecord",
            component: Ea
        }, {
            path: "/transactionList",
            name: "Transaction",
            component: Na
        }, {
            path: "/withdrawal",
            name: "Withdrawal",
            component: Ka
        }, {
            path: "/withdrawalRecord",
            name: "WithdrawalRecord",
            component: ei
        }, {
            path: "/rechargeRecord",
            name: "RechargeRecord",
            component: ri
        }, {
            path: "/rp",
            name: "RedPacket",
            component: pi
        }, {
            path: "/suggestionList",
            name: "SuggestionList",
            component: yi
        }, {
            path: "/addSuggestion",
            name: "AddSuggestion",
            component: Ci
        }, {
            path: "/promotion",
            name: "Promotion",
            component: Di
        }, {
            path: "/bonusRecord",
            name: "BonusRecord",
            component: Bi
        }, {
            path: "/promotionRecord",
            name: "PromotionRecord",
            component: Mi
        }, {
            path: "/applyToBalanceRecord",
            name: "ApplyToBalanceRecord",
            component: Qi
        }, {
            path: "/parity",
            name: "Parity",
            component: nn
        }, {
            path: "/sapre",
            name: "Sapre",
            component: dn
        }, {
            path: "/bcone",
            name: "Parity",
            component: hn
        }, {
            path: "/emerd",
            name: "Emerd",
            component: wn
        }]
          , Sn = new j["a"]({
            routes: kn
        })
          , $n = Sn
          , Cn = a("c1df")
          , Vn = a.n(Cn)
          , Tn = {
            install: function(t, e) {
                t.filter("datefmt", (function(t, e) {
                    return Vn()(t).format(e)
                }
                )),
                t.filter("time_ago", (function(t, e) {
                    return Vn.a.locale("zh-cn"),
                    Vn()(t, e).fromNow()
                }
                )),
                t.filter("tab", (function(t) {
                    return "share" === t ? "分享" : "ask" === t ? "问答" : "job" === t ? "招聘" : void 0
                }
                )),
                t.filter("comment", (function(t) {
                    return t.replace('<a href="/user', '<a href="#/user')
                }
                ))
            }
        }
          , Pn = a("bc3a")
          , jn = a.n(Pn)
          , In = a("c0a4")
          , Yn = a.n(In)
          , Dn = a("487a")
          , qn = a.n(Dn)
          , Ln = (a("bf40"),
        a("5363"),
        a("a4b1"),
        a("a925"))
          , An = a("2b27")
          , En = a.n(An);
        i["default"].use(En.a),
        i["default"].use(P.a, {
            iconfont: "mdi",
            theme: {
                primary: Yn.a.purple,
                secondary: Yn.a.grey.darken1,
                accent: Yn.a.shades.black,
                error: Yn.a.red.accent3
            }
        }),
        i["default"].use(C["a"]),
        i["default"].use(j["a"]),
        i["default"].use(Tn),
        i["default"].use(qn.a),
        i["default"].config.productionTip = !1,
        i["default"].prototype.$ajax = jn.a,
        i["default"].use(Ln["a"]);
        var zn = new Ln["a"]({
            locale: Lt.state.locale,
            messages: {
                en: a("fd34"),
				cn: a("fd35"),
				id: a("fd36"),
				th: a("fd37"),
                in: a("33ba")
            }
        });
        new i["default"]({
            router: $n,
            store: Lt,
            i18n: zn,
            render: function(t) {
                return t($)
            }
        }).$mount("#app"),
        $n.afterEach((function(t, e, a) {
            window.scrollTo(0, 0)
        }
        ))
    },
    "6b80": function(t, e, a) {
        "use strict";
        var i = a("47cf")
          , n = a.n(i);
        n.a
    },
    "92a6": function(t, e, a) {
        "use strict";
        var i = a("abab")
          , n = a.n(i);
        n.a
    },
    "9dbd": function(t, e, a) {
        "use strict";
        var i = a("2bee")
          , n = a.n(i);
        n.a
    },
    a25b: function(t, e, a) {
        "use strict";
        var i = a("11db")
          , n = a.n(i);
        n.a
    },
    a4b1: function(t, e, a) {},
    a94e: function(t, e, a) {
        "use strict";
        var i = a("4711")
          , n = a.n(i);
        n.a
    },
    abab: function(t, e, a) {},
    b5ef: function(t, e, a) {},
    bc28: function(t, e, a) {
        t.exports = "."+a.p + "img/avatar.cfa8dd9d.svg"
    },
    c81a: function(t, e, a) {},
    df7e: function(t, e, a) {
        "use strict";
        var i = a("b5ef")
          , n = a.n(i);
        n.a
    },
    ea62: function(t, e, a) {
        t.exports = "."+a.p + "img/app.6db6daf9.png"
    },
    fd34: function(t, e) {
        t.exports = {
            shop: {
                welcome: "Welcome Back",
                quality_guarantee: "Quality Guarantee",
                coem_shop: "COEM SHOP",
                search_for_goods: "Search for goods",
                product: "Product",
                buy_now: "Buy Now",
                buy: "Buy",
                sold_out: "Sold Out",
                product_spec: "Product Specifications",
                select_address: "Select Address",
                add_address: "Add Address",
                enter_pwd: "Enter your login password",
                pay_now: "Pay Now",
                open_with_an_app: "Open with an app"
            },
            win: {
                ava_bal: "Available balance",
                recharge: "Recharge",
                read_rule: "Read Rule",
                success: "Success",
                fail: "Fail",
                wait: "Wait",
                parity: "Parity",
                sapre: "Sapre",
                bcone: "Bcone",
                emerd: "Emerd",
                period: "Period",
                pre_period: "PrePeriod",
                period_detail: "Period Detail",
                contract_money: "Contract Money",
                contract_count: "Contract Count",
                delivery: "Delivery",
                fee: "Fee",
                open_price: "Open Price",
                select: "Select",
                status: "Status",
                amount: "Amount",
                create_time: "Create Time",
                count_down: "Count Down",
                join_green: "Join Green",
                join_violet: "Join Violet",
                join_red: "Join Red",
                record: "Record",
                my: "My",
                price: "Price",
                number: "Number",
                result: "Result",
                total_money_is: "Total contract money is",
                green: "Green",
                red: "Red",
                violet: "Violet",
                prepay: "Pre Pay",
                rule_of_guess: "Rule of Guess",
                show_period: "Show Period",
                show_open_num: "Show Open Num"
            },
            my: {
                user: "User",
                ava_bal: "Available balance",
                orders: "Orders",
                all: "All",
                undeliver: "Undeliver",
                unreceive: "Unreceive",
                success: "Success",
                fail: "Fail",
                back_to_balance: "Back to balance",
                wait: "Wait",
                official: "Official",
                wallet: "Wallet",
                recharge: "Recharge",
                recharge_cancel: "Recharge Cancel",
                change_nick_name: "Change Nick Name",
                nick_name: "Nick Name",
                balance: "Balance",
                enter_select_recharge_amount: "Enter or Select recharge amount",
                payment: "Payment",
                payout: "Payout",
                recharge_record: "Recharge Record",
                withdrawal: "Withdrawal",
                withdrawal_reject: "Withdrawal Reject",
                enter_withdrawal_amount: "Enter withdrawal amount",
                fee: "Fee",
                to_account: "to account",
                select_bank_card: "Select Bank Card",
                add_bank_card: "Add Bank Card",
                edit_bank_card: "Edit Bank Card",
                add_address: "Add Address",
                edit_address: "Edit Address",
                enter_pwd: "Enter your login password",
                transactions: "Transactions",
                join_period: "Join Period",
                period_win: "Period Win",
                order_cost: "Order Cost",
                withdrawal_fee: "Withdrawal Fee",
                profit_from_promotion: "Bonus from Promotion",
                bank_card: "Bank Card",
                full_name: "Full Name",
                actual_name: "Actual Name",
                ifsc_code: "IFSC Code",
                account_number: "Bank Account Number",
				transfer_bankcode: "Transfer Bank Name",
				transfer_account_number: "Transfer Account Number",
				your_bankcode: "Your Bank Name",
				your_account_number: "Your Account Number",
                province: "Province",
                state_territory: "State/Territory",
                city: "City",
                email: "Email",
                upi: "UPI Account",
                address: "Address",
                pin_code: "Pincode",
                state: "State",
                town_city: "Town/City",
                detail_address: "Detail Address",
                account_security: "Account Security",
                reset_pwd: "Reset Password",
                about: "About",
                logout: "Logout",
                withdrawal_record: "Withdrawal Record",
                mobile_number: "Mobile Number",
                mobile: "Mobile",
                password: "Password",
                login: "Login",
                mb_required: "Mobile number is required",
                pwd_required: "Password is required",
                verify_code_required: "Verification Code is required",
    			img_code_required: "Image Verification Code is required",
                r_code_required: "Recommendation Code is required",
                email_required: "Email is required",
                email_must_valid: "Email must be valid",
                register: "Register",
                forget_pwd: "Forgot Password?",
                verify_code: "Verification Code",
    			img_code: "Image Verification Code",
                r_code: "Recommendation Code",
                new_pwd: "New Password",
                gift_code: "Gift Code",
                receive_gift: "Receive Gift",
                bank_name: "Bank Name",
                suggestions: "Complaints & Suggestions",
                add_suggestion: "Add Complaints & Suggestion",
                promotion: "Promotion",
                promotion_record: "Promotion Record",
                type_suggestion: "Suggestion",
                type_consult: "Consult",
                type_recharge: "Recharge Problem",
                type_withdraw: "Withdraw Problem",
                type_parity: "Parity Problem",
                type_gift: "Gift Receive Problem",
                type_other: "Other",
                type: "Type",
                out_id: "Out Id",
                out_id_hint: "Trade No. cause the problem",
                whats_app: "WhatsApp",
                whats_app_hint: "WhatsApp to contact you",
                description: "Description",
                service_desc: "Service: 10:00~17:00, Mon~Fri about 1~5 business days",
                reply: "Reply",
                bonus: "Bonus",
                apply: "Apply",
                bonus_record: "Bonus Record",
                apply_record: "Apply Record",
                level_1: "Level 1",
                level_2: "Level 2",
                total_people: "Total People",
                contribution: "Contribution",
                invite_friends: "Invite Friends",
                apply_to_balance: "Apply to Balance",
                my_promotion_code: "My Promotion Code",
                my_promotion_link: "My Promotion Link",
                open_link: "Open Link",
				copy_link: "Copy Link",
                apply_all: "Apply All",
                app_download: "App Download",
                download_android: "Android Download"
            },
            msg: {
                guess_rule_part_1: "3 minutes 1 issue, 2 minutes and 30 seconds to order, 30 seconds to show the lottery result. It opens all day. The total number of trade is 480 issues",
                guess_rule_part_2: "If you spend 100 to trade, after deducting 2 service fee, your contract amount is 98:",
                guess_rule_part_3: "1. JOIN GREEN: if the result shows 1,3,7,9, you will get (98*2) 196",
                guess_rule_part_4: "If the result shows 5, you will get (98*1.5) 147",
                guess_rule_part_5: "2. JOIN RED: if the result shows 2,4,6,8, you will get (98*2) 196; If the result shows 0, you will get (98*1.5) 147",
                guess_rule_part_6: "3. JOIN VIOLET: if the result shows 0 or 5, you will get (98*4.5) 441",
                guess_rule_part_7: "4. SELECT NUMBER: if the result is the same as the number you selected, you will get (98*9) 882",
                do_delete_bank_card: "Do you want to delete this bank card?",
                bank_card_saved: "Your bank card is successful saved",
                do_delete_address: "Do you want to delete this address?",
                address_saved: "Your address is successful saved",
                register_success: "Your account is successful registered",
                do_logout: "Do you want to logout?",
                contract_completed: "Your contract is successful completed",
                redeem_gift: "Input your mobile number to redeem this gift",
                redeem_success: "Your gift is successful redeemed",
                withdraw_success: "Your withdrawal is successful completed",
                suggestion_success: "Your complaints & suggestions is successful completed",
                apply_bonus_success: "Your apply to balance is successful completed",
                acf_commit_success: "Your payment is successful commit, please wait message to pay",
                maintenance: "The app is shut down for maintenance, please wait for a period of time"
            },
            main: {
                home: "Home",
                search: "Search",
                win: "Win",
                my: "My",
                currency_symbol: "₹",
                notice: "Notice",
                close: "Close",
                ok: "Ok",
                yes: "Yes",
                loading: "Loading",
                edit: "Edit",
                delete: "Delete",
                cancel: "Cancel",
                confirm: "Confirm",
                wait: "Wait",
                completed: "Completed",
                continue: "Continue",
                iagree: "I agree",
                agree: "Agree",
                fail: "Fail",
                detail: "Detail",
                auto_fill: "Auto Fill"
            }
        }
    },
	fd35: function(t, e) {
	    t.exports = {
            shop: {
                welcome: "欢迎回来",
                quality_guarantee: "网站服务条款",
                coem_shop: "COEM SHOP",
                search_for_goods: "搜索商品",
                product: "商品",
                buy_now: "立即购买",
                buy: "购买",
                sold_out: "已售光",
                product_spec: "商品规格",
                select_address: "选择地址",
                add_address: "新增地址",
                enter_pwd: "请输入您的登录密码",
                pay_now: "立即支付",
                open_with_an_app: "下载APP"
            },
            win: {
                ava_bal: "可用余额",
                recharge: "充值",
                read_rule: "阅读规则",
                success: "成功",
                fail: "未中奖",
                wait: "中奖",
                parity: "彩种A",
                sapre: "彩种B",
                bcone: "彩种C",
                emerd: "彩种D",
                period: "期数",
                pre_period: "PrePeriod",
                period_detail: "投注详情",
                contract_money: "注单金额",
                contract_count: "注单数量",
                delivery: "投注金额",
                fee: "手续费",
                open_price: "开放价格",
                select: "投注内容",
                status: "状态",
                amount: "投注金额",
                create_time: "创建时间",
                count_down: "截止时间",
                join_green: "投注绿色",
                join_violet: "投注紫色",
                join_red: "投注红色",
                record: "记录",
                my: "我的",
                price: "商品价格",
                number: "开奖号码",
                result: "结果",
                total_money_is: "订单总金额",
                green: "绿色",
                red: "红色",
                violet: "紫色",
                prepay: "Pre Pay",
                rule_of_guess: "竞猜规则",
                show_period: "显示期数",
                show_open_num: "显示开奖数字"
            },
            my: {
                user: "用户名",
                ava_bal: "余额",
                orders: "我的订单",
                all: "全部订单",
                undeliver: "待付款",
                unreceive: "待收货",
                success: "成功",
                fail: "未中奖",
                back_to_balance: "返回余额",
                wait: "等待",
                official: "Official",
                wallet: "我的钱包",
                recharge: "充值",
                recharge_cancel: "取消充值",
                change_nick_name: "修改昵称",
                nick_name: "昵称",
                balance: "余额",
                enter_select_recharge_amount: "请输入或选择充值金额",
                payment: "充值方式",
                payout: "Payout",
                recharge_record: "充值记录",
                withdrawal: "取款",
                withdrawal_reject: "提现失败",
                enter_withdrawal_amount: "请输入提现金额",
                fee: "手续费",
                to_account: "到账金额",
                select_bank_card: "请选择银行卡",
                add_bank_card: "新增银行卡",
                edit_bank_card: "编辑银行卡",
                add_address: "新增地址",
                edit_address: "编辑地址",
                enter_pwd: "请输入登录密码",
                transactions: "账户记录",
                join_period: "未中奖",
                period_win: "中奖",
                order_cost: "订单成本",
                withdrawal_fee: "提现手续费",
                profit_from_promotion: "晋升奖金",
                bank_card: "银行卡",
                full_name: "全名",
                actual_name: "实际名称",
                ifsc_code: "IFSC代码",
                account_number: "银行账号",
				transfer_bankcode: "Transfer Bank Name",
				transfer_account_number: "Transfer Account Number",
				your_bankcode: "Your Bank Name",
				your_account_number: "Your Account Number",
                province: "Province",
                state_territory: "州/县",
                city: "城市",
                email: "邮箱",
                upi: "UPI账号",
                address: "地址",
                pin_code: "Pin代码",
                state: "州",
                town_city: "城市",
                detail_address: "详细地址",
                account_security: "账户安全",
                reset_pwd: "重置密码",
                about: "关于我们",
                logout: "退出登录",
                withdrawal_record: "提现记录",
                mobile_number: "手机号码",
                mobile: "手机",
                password: "密码",
                login: "登录",
                mb_required: "手机号码为必填项",
                pwd_required: "密码为必填项",
                verify_code_required: "验证码为必填项",
				img_code_required: "图片验证码为必填项",
                r_code_required: "推荐码为必填项",
                email_required: "邮箱为必填项",
                email_must_valid: "无效邮箱",
                register: "注册",
                forget_pwd: "忘记密码?",
                verify_code: "验证码",
				img_code: "图片验证码",
                r_code: "邀请码",
                new_pwd: "新密码",
                gift_code: "礼品码",
                receive_gift: "收到的礼品",
                bank_name: "银行名称",
                suggestions: "投诉和建议",
                add_suggestion: "新增投诉和建议",
                promotion: "促销",
                promotion_record: "促销记录",
                type_suggestion: "建议",
                type_consult: "咨询",
                type_recharge: "充值问题",
                type_withdraw: "提现问题",
                type_parity: "开奖问题",
                type_gift: "礼品接收问题",
                type_other: "其他",
                type: "类别",
                out_id: "有问题的订单号",
                out_id_hint: "有问题的订单编号",
                whats_app: "WhatsApp账号",
                whats_app_hint: "我们会通过WhatsApp联系您",
                description: "问题详细描述",
                service_desc: "服务时间: 10:00~17:00, 周一~周五，大约1~5个工作日",
                reply: "回复",
                bonus: "奖金",
                apply: "应用",
                bonus_record: "奖金记录",
                apply_record: "应用记录",
                level_1: "等级1",
                level_2: "等级2",
                total_people: "总人数",
                contribution: "总订单金额",
                invite_friends: "邀请朋友",
                apply_to_balance: "转到余额",
                my_promotion_code: "我的邀请码",
                my_promotion_link: "我的邀请链接",
                open_link: "打开链接",
				copy_link: "复制链接",
                apply_all: "全部应用",
                app_download: "App下载",
                download_android: "安卓下载"
            },
            msg: {
                guess_rule_part_1: "每3分钟1期，2分30秒下注，30秒开奖。全天24小时开放。每天期数为480期",
                guess_rule_part_2: "如果你投注100元，扣除2元服务费后，你的投注金额是98元",
                guess_rule_part_3: "1、投注绿色：如果结果显示1,3,7,9，则可获得（98*2）196元",
                guess_rule_part_4: "如果开奖结果为5，你将可获得（98*1.5）147元",
                guess_rule_part_5: "2、投注红色：如果开奖结果显示2,4,6,8，则可获得（98*2）196元；如果开奖结果为0，你将可获得（98*1.5）147元",
                guess_rule_part_6: "3、投注紫色：如果开奖显示0或5，则可获得（98*4.5）441元",
                guess_rule_part_7: "4。投注号码：如果开奖与您选择的号码相同，则可获得（98*9）882元",
                do_delete_bank_card: "是否要删除此银行卡？",
                bank_card_saved: "您的银行卡保存成功",
                do_delete_address: "是否要删除此地址？",
                address_saved: "您的地址保存成功",
                register_success: "您的账户注册成功",
                do_logout: "是否要退出登录？",
                contract_completed: "您的订单已成功提交",
                redeem_gift: "输入您的手机号码兑换此礼物",
                redeem_success: "您的礼物兑换成功",
                withdraw_success: "您的取款成功提交",
                suggestion_success: "您的投诉和建议已成功提交",
                apply_bonus_success: "转账到余额成功",
                acf_commit_success: "您的支付提交成功，请等待消息支付",
                maintenance: "网站正在维护中，请稍候一段时间再访问"
            },
            main: {
                home: "首页",
                search: "搜索",
                win: "竞猜",
                my: "我的",
                currency_symbol: "₹",
                notice: "通知",
                close: "关闭",
                ok: "好的",
                yes: "是的",
                loading: "正在加载",
                edit: "编辑",
                delete: "删除",
                cancel: "取消",
                confirm: "确认",
                wait: "等待",
                completed: "已完成",
                continue: "继续",
                iagree: "我同意",
                agree: "同意",
                fail: "失败",
                detail: "详情",
                auto_fill: "自动填写"
            }
        }
	},
	fd36: function(t, e) {
	    t.exports = {
            shop: {
                /*welcome: "Selamat datang kembali",*/
                welcome: "Mal lndonesia",
                quality_guarantee: "Kualitas terjamin",
                coem_shop: "Coem Toko",
                search_for_goods: "Pencarian untuk barang barang",
                product: "Produk",
                buy_now: "Beli sekarang",
                buy: "Beli",
                sold_out: "Stok Habis",
                product_spec: "Produk spesifikasi",
                select_address: "Pilih Alamat",
                add_address: "Tambahkan Alamat",
                enter_pwd: "Masukkan kata sandi masuk",
                pay_now: "Bayar Sekarang",
                open_with_an_app: "Buka dengan aplikasi"
            },
            win: {
                ava_bal: "Saldo tersedia",
                recharge: "Isi ulang",
                read_rule: "Baca peraturan",
                success: "Success",
                fail: "Gagal",
                wait: "Menunggu",
                parity: "Parity",
                sapre: "Sapre",
                bcone: "Bcone",
                emerd: "Emerd",
                period: "Periode",
                pre_period: "Pra periode",
                period_detail: "Periode keterangan",
                contract_money: "Kontrak uang",
                contract_count: "Jumlah kontrak",
                delivery: "Pengiriman",
                fee: "Biaya",
                open_price: "Buka harga",
                select: "Pilih",
                status: "Status",
                amount: "Jumlah",
                create_time: "Menciptakan waktu",
                count_down: "Hitung mundur",
                join_green: "Join Green",
                join_violet: "Join Violet",
                join_red: "Join Red",
                record: "Merekam",
                my: "Saya",
                price: "Haraga",
                number: "Angka",
                result: "Hasil",
                total_money_is: "Total kontrak uang adalah",
                green: "Hijau",
                red: "Merah",
                violet: "Ungu",
                prepay: "Prabayar",
                rule_of_guess: "Aturan tebakan",
                show_period: "Periode pertunjukan",
                show_open_num: "Tunjukkan nomor terbuka"
            },
            my: {
                user: "Pengguna",
                ava_bal: "Saldo tersedia",
                orders: "Pesanan",
                all: "Semua",
                undeliver: "Dalam pengiriman",
                unreceive: "Tidak diterima",
                success: "Berhasil",
                fail: "Gagal",
                back_to_balance: "Kembali ke salso",
                wait: "Menunggu",
                official: "Resmi",
                wallet: "Dompet",
                recharge: "Mengisi ulang",
                recharge_cancel: "Isi ulang batal",
                change_nick_name: "Ubah nama panggilan",
                nick_name: "Nama panggilan",
                balance: "Saldo",
                enter_select_recharge_amount: "Masukkan pilih isi ulang",
                payment: "Pembayaran",
                payout: "Pembayaran",
                recharge_record: "Isi ulang catatan",
                withdrawal: "Penarikan",
                withdrawal_reject: "Penarikan ditolak",
                enter_withdrawal_amount: "Masukkan jumlah penarikan",
                fee: "Biaya",
                to_account: "Ke rekening",
                select_bank_card: "Pilih kartu bank",
                add_bank_card: "Tambahkan kartu",
                edit_bank_card: "Edit kartu",
                add_address: "Tambahkan alamat",
                edit_address: "Edit alamat",
                enter_pwd: "Masukkan kata sandi",
                transactions: "Transaksi",
                join_period: "Periode",
                period_win: "Kemenangan periode",
                order_cost: "Biaya pemesanan",
                withdrawal_fee: "Biaya penarikan",
                profit_from_promotion: "Bonus dari promosi",
                bank_card: "Kartu Bank",
                full_name: "Nama lengkap",
                actual_name: "Nama asli",
                ifsc_code: "Kode ifsc",
                account_number: "Akun bank",
				transfer_bankcode: "Transfer Bank Name",
				transfer_account_number: "Transfer Account Number",
				your_bankcode: "Your Bank Name",
				your_account_number: "Your Account Number",
                province: "Provinsi",
                state_territory: "Wilayah Negara bagian",
                city: "Kota",
                email: "Email",
                upi: "Akun UPI",
                address: "Alamat",
                pin_code: "Kode pin",
                state: "Negara",
                town_city: "Kota",
                detail_address: "Detail alamat",
                account_security: "Keamanan akun",
                reset_pwd: "Setel ulang kata sandi",
                about: "Tentang",
                logout: "Keluar",
                withdrawal_record: "Catatan penarikan",
                mobile_number: "Nomor hp",
                mobile: "Telephone genggam",
                password: "Kata sandi",
                login: "Masuk",
                mb_required: "Nomor Hp diperlukan",
                pwd_required: "Kata sandi diperlukan",
                verify_code_required: "Kode verifikasi diperlukan",
                r_code_required: "Kode rekomendasi diperlukan",
                email_required: "Email diperlukan",
                email_must_valid: "Email harus valid",
                register: "Daftar",
                forget_pwd: "Lupa kata sandi?",
                verify_code: "Kode verifikasi",
                r_code: "Kode rekomendasi",
                new_pwd: "Password baru",
                gift_code: "Kode hadiah",
                receive_gift: "Menerima hadiah",
                bank_name: "Nama bank",
                suggestions: "Keluhan dan saran",
                add_suggestion: "Tambahkan keluhan dan saran",
                promotion: "Promosi",
                promotion_record: "Catatan promosi",
                type_suggestion: "Ketik saran",
                type_consult: "Ketik berkonsuultasi",
                type_recharge: "Isi ulang bermasalah",
                type_withdraw: "Penarikan bermasalah",
                type_parity: "Paritas problem",
                type_gift: "Hadiah menerima masalah",
                type_other: "Lainya",
                type: "Ketik",
                out_id: "Keluar id",
                out_id_hint: "Nomer perdagangan. Menyebabkan masalah",
                whats_app: "WhatsApp",
                whats_app_hint: "Menghubungi anda melalui whatsapp",
                description: "Deskripsi",
                service_desc: "10:00~17:00, Mon~Fri about 1~5 business days",
                reply: "Balas",
                bonus: "Bonus",
                apply: "Berlaku",
                bonus_record: "Catatan bonus",
                apply_record: "Berlaku catatan",
                level_1: "Tingkat 1",
                level_2: "Tingkat 2",
                total_people: "Jumlah orang",
                contribution: "Kontribusi",
                invite_friends: "Undang teman",
                apply_to_balance: "Berlaku untuk saldo",
                my_promotion_code: "Kode promosi saya",
                my_promotion_link: "Kode tautan saya",
                open_link: "Buka tautan",
				copy_link: "Copy Link",
                apply_all: "Berlaku semua",
                app_download: "Unduh aplikasi",
                download_android: "Unduh android"
            },
            msg: {
                guess_rule_part_1: "3 Minutes 1 issue, 2 minutes and 30 seconds to order, 30 seconds to show the lottery result, It opens all day, The total number of trade is 480 issues",
                guess_rule_part_2: "Jika anda menghabiskan 100 untuk berdagang, setelah dikurangi 2 biaya layanan,jumlah kontrak anda adalah 98",
                guess_rule_part_3: "1. Join Green: jika hasilnya menunjukkan 1,3,7,9,  Anda akan mendapatkan (98 * 2) 196; Jika hasilnya menunjukkan 5, Anda akan mendapatkan (98 * 1.5) 147",
                guess_rule_part_4: "",
                guess_rule_part_5: "2. Join Red: jika hasilnya menunjukkan 2,4,6,8 Anda akan mendapatkan (98 * 2) 196; Jika hasilnya menunjukkan 0 maka didapat (98 * 1,5) 147",
                guess_rule_part_6: "3. Join Violet: Jika hasilnya menunjukkan 0 atau 5, kamu akan mendapatkan (98 * 4.5) 441",
                guess_rule_part_7: "4. Pilih nomor: Jika hasilnya sama dengan nomor yang anda pilih, anda akan mendapatkan (98 * 9) 882",
                bank_card_saved: "Kartu bank Anda berhasil disimpan",
                do_delete_bank_card: "Apakah Anda ingin menghapus kartu bank ini?",
                do_delete_address: "Apakah Anda ingin menghapus alamat ini?",
                address_saved: "Alamat Anda berhasil disimpan",
                register_success: "Akun Anda berhasil terdaftar",
                do_logout: "Apakah Anda ingin keluar?",
                contract_completed: "Kontrak Anda adalah sukses",
                redeem_gift: "Silakan masukkan nomor ponsel Anda untuk menukarkan hadiah ini",
                redeem_success: "Hadiah Anda berhasil ditebus",
                withdraw_success: "Penarikan Anda berhasil diselesaikan",
                suggestion_success: "Keluhan dan Saran Anda telah berhasil diselesaikan",
                apply_bonus_success: "Permintaan keseimbangan Anda telah selesai dengan sukses",
                acf_commit_success: "Pembayaran berhasil, silakan tunggu pesan Anda",
                maintenance: "Aplikasi ditutup untuk pemeliharaan, harap tunggu"
            },
            main: {
                home: "Rumah",
                search: "Cari",
                win: "Menang",
                my: "Saya",
                currency_symbol: "IDR",
                notice: "Memperhatikan",
                close: "Menutup",
                ok: "Baik",
                yes: "Iya",
                loading: "Memuat",
                edit: "Sunting",
                delete: "Hapus",
                cancel: "Batal",
                confirm: "Konfirmasi",
                wait: "Tunggu",
                completed: "Lengkap",
                continue: "Meneruskan",
                iagree: "Saya setuju",
                agree: "Setuju",
                fail: "Gagal",
                detail: "Detail",
                auto_fill: "Pengisian otomatis"
            }
		}
	},
	fd37: function(t, e) {
	    t.exports = {
	        shop: {
	                        /*welcome: "ยินดีต้อนรับกลับ",*/
	                        welcome: "ยินดีต้อนรับ",
	                        quality_guarantee: "ประกันคุณภาพ",
	                        coem_shop: "มาที่ร้าน",
	                        search_for_goods: "ค้นหาผลิตภัณฑ์",
	                        product: "ผลิตภัณฑ์",
	                        buy_now: "ซื้อทันที",
	                        buy: "ซื้อ",
	                        sold_out: "ขายหมดแล้ว",
	                        product_spec: "สเปคผลิตภัณฑ์",
	                        select_address: "เลือกที่อยู่",
	                        add_address: "เพิ่มที่อยู่",
	                        enter_pwd: "ป้อนรหัสผ่าน",
	                        pay_now: "ชำระเงินทันที",
	                        open_with_an_app: "เปิดด้วยแอพ"
	                    },
	                    win: {
	                        ava_bal: "ยอดคงเหลือที่ใช้ได้",
	                        recharge: "เติมเงิน",
	                        read_rule: "อ่านกฎ",
	                        success: "สำเร็จ",
	                        fail: "ล้มเหลว",
	                        wait: "รอ",
	                        parity: "Parity",
	                        spare: "Spare",
	                        bcone: "Bcone",
	                        emerd: "Emerd",
	                        period: "ช่วง",
	                        pre_period: "ช่วงที่แล้ว",
	                                                  period_detail: "รายละเอียดในช่วง",
	                        contract_money: "เงินสัญญา",
	                        contract_count: "จำนวนสัญญา",
	                        delivery: "ส่ง",
	                        fee: "ค่า",
	                        open_price: "เปิดเผยราคา",
	                        select: "เลือก",
	                        status: "สถานะ",
	                        amount: "จำนวน",
	                        create_time: "สร้างเวลา",
	                        count_down: "นับถอยหลัง",
	                        join_green: "เพิ่มสีเขียว",
	                        join_violet: "เพิ่มสีม่วง",
	                        join_red: "เพิ่มสีแดง",
	                        record: "บันทึก",
	                        my: "ฉัน",
	                        price: "ราคา",
	                        number: "ตัวเลข",
	                        result: "ผล",
	                        total_money_is: "ราคารวมคือ",
	                        green: "สีเขียว",
	                        red: "สีแดง",
	                        violet: "สีม่วง",
	                        prepay: "ชำระเงินล่วงหน้า",
	                        rule_of_guess: "กฎที่คาดเดา",
	                        show_period: "ช่วงแสดง",
	                        show_open_num: "แสดงหมายเลขเปิดเผย"
	                    },
	                    my: {
	                        user: "ผู้ใช้",
	                        ava_bal: "ยอดคงเหลือที่ใช้ได้",
	                        orders: "คำสั่ง",
	                        all: "ทั้งหมด",
	                        undeliver: "ยังไม่ได้ส่งมอบ",
	                        unreceive: "ยังไม่ได้รับ",
	                        success: "สำเร็จ",
	                        fail: "ล้มเหลว",
	                        back_to_balance: "กลับสู่ความสมดุล",
	                        wait: "รอ",
	                        official: "ทางการ",
	                        wallet: "กระเป๋าเงิน",
	                        recharge: "เติมเงิน",
	                        recharge_cancel: "ยกเลิกการเติมเงิน",
	                        change_nick_name: "เปลี่ยนชื่อเล่น",
	                        nick_name: "ชื่อเล่น",
	                        balance: "สมดุล",
	                        enter_select_recharge_amount: "ป้อนจำนวนเงินที่เลือกจะเติม",
	                        payment: "ชำระเงิน",
	                        payout: "ชำระเงิน",
	                        recharge_record: "เติมเงินบันทึก",
	                        withdrawal: "ถอนเงิน",
	                        withdrawal_reject: "ปฏิเสธการถอนเงิน",
	                        enter_withdrawal_amount: "ป้อนจำนวนเงินที่ถอน",
	                        fee: "ค่า",
	                        to_account: "ถึงบัญชี",
	                        select_bank_card: "เลือกบัตรธนาคาร",
	                        add_bank_card: "เพิ่มบัตรธนาคาร",
	                        edit_bank_card: "แก้ไขบัตรธนาคาร",
	                        add_address: "เพิ่มที่อยู่",
	                        edit_address: "แก้ไขที่อยู่",
	                        enter_pwd: "ป้อนรหัสผ่าน",
	                        transactions: "ซื้อขาย",
	                        join_period: "ช่วงเข้าร่วม",
	                        period_win: "ช่วงชนะ",
	                        order_cost: "ต้นทุนออเดอร์",
	                        withdrawal_fee: "ค่าถอนเงิน",
	                        profit_from_promotion: "กำไรจากโปรโมชั่น",
	                        bank_card: "บัตรธนาคาร",
	                        full_name: "ชื่อเต็ม",
	                        actual_name: "ชื่อจริง",
	                        ifsc_code: "รหัส ifsc",
	                        account_number: "บัญชีธนาคาร",
							transfer_bankcode: "Transfer Bank Name",
							transfer_account_number: "Transfer Account Number",
							your_bankcode: "Your Bank Name",
							your_account_number: "Your Account Number",
	                        province: "จังหวัด",
	                        state_territory: "อาณาเขตของรัฐ",
	                        city: "เมือง",
	                        email: "อีเมล",
	                        upi: "บัญชี UPI",
	                        address: "ที่อยู่",
	                        pin_code: "รหัส pin",
	                        state: "รัฐ",
	                        town_city: "เขตเมือง",
	                        detail_address: "ที่อยู่ละเอียด",
	                        account_security: "ความปลอดภัยของบัญชี",
	                        reset_pwd: "รีเซ็ตรหัสผ่าน",
	                        about: "เกี่ยวกับ",
	                        logout: "ออกจากระบบ",
	                        withdrawal_record: "ถอนเงินบันทึก",
	                        mobile_number: "หมายเลขโทรศัพท์",
	                        mobile: "มือถือ",
	                        password: "รหัสผ่าน",
	                        login: "เข้าสู่ระบบ",
	                        mb_required: "ต้องการหมายเลขโทรศัพท์",
	                        pwd_required: "ต้องการรหัสผ่าน",
	                        verify_code_required: "ต้องการรหัสยืนยัน",
	                        img_code_required: "ต้องระบุรหัสยืนยันภาพ",
	                        r_code_required: "ต้องการรหัส",
	                        email_required: "ต้องการอีเมล",
	                        email_must_valid: "อีเมลต้องถูกต้อง",
	                        register: "จดทะเบียน",
	                        forget_pwd: "ลืมรหัสผ่าน",
	                        verify_code: "ยืนยันรหัส",
	                        img_code: "รหัสยืนยันภาพ",
	                        r_code: "รหัส",
	                        new_pwd: "รหัสผ่านใหม่",
	                        gift_code: "รหัสของขวัญ",
	                        receive_gift: "ได้รับของขวัญ",
	                        bank_name: "ชื่อธนาคาร",
	                        suggestions: "คำแนะนำ",
	                        add_suggestion: "เพิ่มคำแนะนำ",
	                        promotion: "โปรโมชั่น",
	                        promotion_record: "บันทึกโปรโมชั่น",
	                        type_suggestion: "ประเภทของคำแนะนำ",
	                        type_consult: "ประเภทของการปรึกษา",
	                        type_recharge: "ประเภทของการเติมเงิน",
	                        type_withdraw: "ประเภทของการถอนเงิน",
	                        type_parity: "ประเภทของราคาจับต้องได้",
	                        type_gift: "ประเภทของของขวัญ",
	                        type_other: "ประเภทอื่น",
	                        type: "ประเภทของ",
	                        out_id: "id ออกจากระบบ",
	                        out_id_hint: "การแจ้งเตือน id ออกจากระบบ",
	                        whats_app: "WhatsApp",
	                        whats_app_hint: "การแจ้งเดือนของแอป WhatsApp",
	                        description: "คำอธิบาย",
	                        service_desc: "10:00~17:00, Mon~Fri about 1~5 business days",
	                        reply: "ตอบ",
	                        bonus: "เงินปันผล",
	                        apply: "เหมาะสม",
	                        bonus_record: "บันทึกเงินปันผล",
	                        apply_record: "บันทึกการใช้งาน",
	                        level_1: "ระดับ 1",
	                        level_2: "ระดับ 2",
	                        total_people: "จำนวนคนทั้งหมด",
	                        contribution: "คุณูปการ",
	                        invite_friends: "เชิญชวนเพื่อน",
	                        apply_to_balance: "เหมาะสำหรับความสมดุล",
	                        my_promotion_code: "รหัสโปรโมชั่นของฉัน",
	                        my_promotion_link: "ลิงค์โปรโมชั่นของฉัน",
	                        open_link: "เปิดลิงค์",
							copy_link: "คัดลอกลิงค์",
	                        apply_all: "เหมาะสำหรับทั้งหมด",
	                        app_download: "ดาวน์โหลดแอป",
	                        download_android: "ดาวน์โหลดแอนดรอยด์"
	                    },
	                    msg: {
	                        guess_rule_part_1: "3 นาที 1 รายการ, 2 นาที 30 วินาทีในการสั่งซื้อ, 30 วินาทีเพื่อแสดงผลลอตเตอรี่ มันเปิดตลอดทั้งวัน จำนวนการซื้อขายทั้งหมด 480 รายการ",
	                        guess_rule_part_2:"หากคุณจ่าย 100 ซื้อขาย หลังจากหักค่าบริการ 2 ตัวแล้ว จำนวนเงินของสัญญาของคุณคือ 98",
	                        guess_rule_part_3: "1. Join Green: ถ้าผลแสดง 1,3,7,9 คุณจะได้ (98 * 2) 196; ถ้าผลแสดง 5 คุณจะได้รับ (98 * 1.5) 147",
	                        guess_rule_part_4: "",
	                        guess_rule_part_5: "2. Join Red: ถ้าผลแสดง 2,4,6,8 คุณจะได้ (98 * 2) 196; ถ้าผลแสดง 0 คุณจะได้รับ (98 * 1.5) 147",
	                        guess_rule_part_6: "3. Join Violet: ถ้าผลแสดง 0 หรือ 5 คุณจะได้รับ (98 * 4.5) 441",
	                        guess_rule_part_7: "4. เลือกตัวเลข： ถ้าผลเหมือนกับตัวเลขที่คุณเลือก จะได้รับ (98 * 9) 882 ",
	                        bank_card_saved: "บัตรธนาคารของคุณได้บันทึกสำเร็จแล้ว",
	                        do_delete_bank_card: "คุณต้องการลบบัตรธนาคารนี้ไหม",
	                        do_delete_address: "คุณต้องการลบที่อยู่นี้ไหม",
	                        address_saved: "ที่อยู่ของคุณได้บันทึกสำเร็จแล้ว",
	                        register_success: "บัญชีของคุณจดทะเบียนสำเร็จแล้ว",
	                        do_logout: "คุณต้องการออกไหม",
	                        contract_completed: "สัญญาของคุณสำเร็จ",
	                        redeem_gift: "กรุณาป้อนหมายเลขโทรศัพท์ของคุณเพื่อแลกรับของขวัญนี้",
	                        redeem_success: "รางวัลของคุณแลกสำเร็จแล้ว",
	                        withdraw_success: "การถอนเงินของคุณสำเร็จแล้ว",
	                        suggestion_success: "ข้อร้องเรียนและคำแนะนำของคุณได้รับการแก้ไขสำเร็จแล้ว",
	                        apply_bonus_success: "คำขอยอดคงเหลือของคุณสำเร็จแล้ว",
	                        acf_commit_success: "ชำระเงินสำเร็จ  กรุณารอข้อความของคุณ",
	                        maintenance: "ปิดคำขอเพื่อปรับปรุงแล้ว กรุณารอสักครู่"
	                    },
	                    main: {
	                        home: "บ้าน",
	                        search: "หา",
	                        win: "ชนะ",
	                        my: "ฉัน",
	                        currency_symbol: "THB",
	                        notice: "โปรดทราบ",
	                        close: "ปิด",
	                        ok: "โอเค",
	                        yes: "ใช่",
	                        loading: "โหลด",
	                        edit: "แก้ไข",
	                        delete: "ลบ",
	                        cancel: "ยกเลิก",
	                        confirm: "ยืนยัน",
	                        wait: "รอ",
	                        completed: "เสร็จ",
	                        continue: "ต่อ",
	                        iagree: "ฉันเห็นด้วย",
	                        agree: "เห็นด้วย",
	                        fail: "ล้มเหลว",
	                        detail: "รายละเอียด",
	                        auto_fill: "ชาร์จอัตโนมัติ"
	                    }
		}
	}
	
});
