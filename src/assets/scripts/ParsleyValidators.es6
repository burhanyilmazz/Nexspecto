export default class ParsleyValidators {
  static Parsley = window.Parsley;

  static init() {
    ParsleyValidators.Parsley.addValidator("tckn", {
      requirementType: "integer",
      validateNumber: (value, requirement) => {
        var no = value.split("");
        var i,
          total1 = 0,
          total2 = 0,
          total3 = parseInt(no[0]);
        for (i = 0; i < 10; i++) {
          total1 = total1 + parseInt(no[i]);
        }

        for (i = 1; i < 9; i = i + 2) {
          total2 = total2 + parseInt(no[i]);
          total3 = total3 + parseInt(no[i + 1]);
        }

        return !(
          !/^[1-9][0-9]{10}$/.test(value) ||
          total1 % 10 != no[10] ||
          (total3 * 7 - total2) % 10 != no[9]
        );
      },
      messages: {
        tr: "Lütfen geçerli bir TCKN giriniz."
      }
    });

    ParsleyValidators.Parsley.addValidator("tel", {
      requirementType: "integer",
      validateNumber: (value, requirement) => {
        var valueLength = value.length;

        if (value[0] == "0") {
          if (valueLength == 11) {
            return true;
          } else {
            return false;
          }
        } else {
          if (valueLength == 10) {
            return true;
          } else {
            return false;
          }
        }
      },
      messages: {
        tr: "Lütfen geçerli bir telefon numarası giriniz."
      }
    });
  }
}

$(document).ready(() => ParsleyValidators.init());
