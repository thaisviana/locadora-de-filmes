<template>
    <b-row class="form">
        <h2>Formulário de Compra</h2>
        <b-row>
            <p v-if="errors.length">
              <ul class="error">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </p>
        </b-row>
        <b-row>
            <b-col>
              <b-form @submit="onSubmit">
                <b-form-group
                  v-for="(info, index) in form"
                  :key="info.key"
                  :id="'input-' + index"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                  :label="info.key"
                  :label-for="'input-' + index">
                <b-form-input
                    :id="'input-' + index"
                    v-model="info.value"
                    :type="info.type"
                    placeholder="Preencha o campo"
                    required ></b-form-input>
                </b-form-group>
              <b-form-group
                  id="input-estado"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                  label="estados"
                  label-for="estados"
                >
                
            <b-form-select id="estados" v-model="estado" :options="options"></b-form-select>
            </b-form-group>
            <b-button type="submit" block variant="dark">Submit</b-button>
        </b-form>
            </b-col>
          </b-row>
        </b-row>
</template>

<script>
export default {
  name: "Formulario",
  data() {
    return {
      errors: [],
      estado: null,
      options: [
        { value: null, text: "Selecione um estado" },
        { value: "RJ", text: "Rio" },
        { value: "SP", text: "São Paulo" },
      ],
      form: [
        { key: "nome", type: "text", value: "", mask: "" },
        { key: "email", type: "email", value: "", mask: "" },
        { key: "CPF", type: "text", value: "", mask: "999.999.999-99" },
        { key: "endereco", type: "text", value: "", mask: "" },
        { key: "cidade", type: "text", value: "", mask: "" },
        { key: "CEP", type: "text", value: "", mask: "" },
      ],
    };
  },
  methods: {
    testaCPF(strCPF) {
      var Soma;
      var Resto;
      Soma = 0;
      if (strCPF == "00000000000") return false;

      for (let i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10))) return false;

      Soma = 0;
      for (let i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11))) return false;
      return true;
    },
    onSubmit(e) {
      this.errors = [];
      let dados = {
        email: this.form[0].value,
        nome: this.form[1].value,
        CPF: this.form[2].value,
        endereco: this.form[3].value,
        cidade: this.form[4].value,
        CEP: this.form[5].value,
        estado: this.estado,
      };
      if (this.testaCPF(dados.CPF)) {
        alert(`Dados enviados, ${JSON.stringify(dados)}`);
      } else {
        this.errors.push("CPF inválido");
        e.preventDefault();
      }
    },
  },
};
</script>

<style>
.btn-block {
  margin-top: 2.5rem;
}
.error {
  color: red;
}
.form {
  flex-direction: column;
}
</style>