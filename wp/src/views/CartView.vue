<script setup>
import { useAuthStore } from '@/stores/auth.js';
import { useRouter } from 'vue-router';
import { useSpaceShipStore } from '@/stores/spaceShipStore.js';
import { storeToRefs } from 'pinia'

const spaceShipStore = useSpaceShipStore()

const {getProductsInCart} = storeToRefs(spaceShipStore)

console.log('getProductsInCart', getProductsInCart.value)
// get all the titles example
const names = getProductsInCart.value.map((product) => ({name: product.titel}))

// example reroute on not logged in
const auth = useAuthStore()
const router = useRouter()
if (!auth.loggedIn) {
router.push('profiel')
}
</script>

<template>
  <main>
  <div class="cart">
    <div class="inhoud">
      <div class="product">
        <h2 v-for="product in getProductsInCart" > {{ product.afbeelding }}</h2>
        <div>
          <h3>Name:</h3>
          <p v-for="product in getProductsInCart" > {{ product.titel }}</p>
        </div>
        <div>
          <h3>Price:</h3>
          <p v-for="product in getProductsInCart" > {{ "◊ " + product.prijs }}</p>

        </div>
      </div>
      <div class="checkout">
        <div class="coupon-form">
          <form>
            <div class="form-group">
              <label for="couponCode">Coupon Code:</label>
              <input type="text" id="couponCode" name="couponCode" placeholder="Enter your coupon code" required>
            </div>
            <button>Apply Coupon</button>
          </form>
        </div>
        <div class="counting">
          <div class="counting1">
            <p>shipping</p>
            <p>tax</p>
            <h2>Estimated total</h2>
          </div>
          <div class="counting2">
            <p>◊ 200</p>
            <p>21%</p>
            <h3>◊ 999999</h3>
          </div>
        </div>
        <div class="pay">
          <button>checkout</button>
        </div>

      </div>
    </div>
  </div>
  </main>

</template>

<style lang="scss" scoped>
@import "@/assets/shared.scss";

.cart {
  height: 100vh;
  padding: 3rem;
  background-color: $white;
  .inhoud{
    height: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    .product {
      width: 70%;
      display: flex;
      margin-top: 4rem;
      h3{
        margin-bottom: 1rem;
      }
      div{
        margin-left: 5rem;
        p{
          font-family: Arial, sans-serif;
          font-size: 14pt;
          font-weight: 100;
        }
      }

    }
    .checkout {
      width: 30%;
      background-color: #fbfcff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      .coupon-form {
        padding: 20px;
      }

      .form-group {
        margin-bottom: 15px;
      }

      label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
      }

      input {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
      }

      button {
        background-color: $bg;
        color: $white;
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        border: solid 2px $bg;

        &:hover {
          background-color: $white;
          color: $bg;
        }
      }
    }
  }
}
.counting {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
  div{
    color: rgba(14, 14, 14, 0.53);
    p{
      margin-bottom: 1rem;
    }
  }
  h2, h3 {
    margin-top: 2rem;
    color: $bg;
  }
}
.pay {
  text-align: right;
  padding-right: 2rem;
}

</style>