<template>
  <b-col class="flex-column" >
    <div class="product-price">{{ details[0].price }}</div>
    <b-form-group label="Colors:">
      <b-form-radio-group buttons button-variant="outline-primary" v-model="selected" name="radioSubComponent">
        <b-form-radio v-for="version in details" :key="version.product_id" :value="version.product_id"
          @click.native="updateSelection(version.image_url, version.product_id)">
          {{ version.color }}
        </b-form-radio>
      </b-form-radio-group>
    </b-form-group>
  </b-col>
</template>

<script>
export default {
  name: 'ProductDetailBuy',

  props: ['details', 'updateSelection'],

  data() {
    return {
      selected: '',
    }
  },

  mounted() {
    this.selected = this.details[0].product_id;
  }
}
</script>

<style scoped>
.flex-column {
  text-align: center;
}

.product-model {
  font-weight: bold;
  font-size: calc(15px + 2vw);
}

.product-image {
  width: calc(100px + 20vw);
}

.product-id {
  font-size: calc(8px + 1.2vw);
}
</style>
