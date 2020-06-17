export const state = () => ({
  products: [
    {
      id: 1,
      title: 'Red flip-flop',
      description: "Hello everyone, I'm selling those Lebron James' flip-flop",
      price: 50,
      ratings: 0,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      img:"p1.png",
      link: "https://www.display.land/s/13G5K0aGPUJRxkZxEXO6c7?_branch_match_id=629742221606675438"
    },
    {
      id: 2,
      title: 'Blue backpack',
      description: 'Selling this old but gold backpack, it has traveled a lot.',
      price: 35,
      ratings: 0,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      img:"p2.png",
      link: "https://www.display.land/s/1Kx4NdU4yiIk7u9okKsRYQ?_branch_match_id=629742221606675438"
    },
    {
      id: 3,
      title: 'Old 4x4',
      description: 'For more info please contact me.',
      price: 2500,
      ratings: 0,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      img:"p3.png",
      link: "https://www.display.land/s/3UqLAJlxluvSMIeoyz9bzK?_branch_match_id=629742221606675438"
    },
    {
      id: 4,
      title: 'Honda Civic Hatchback Sport',
      description: 'Brand new Honda Civic',
      price: 5000,
      ratings: 0,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      img:"p4.png",
      link: "https://www.display.land/s/4X3WvVX0bTisOHJgNZWJTs?_branch_match_id=629742221606675438"

    },
    {
      id: 5,
      title: 'Plaid Couch',
      description: 'We are moving to another city and giving stuff. If you feel interested please contact me.',
      price: 35,
      ratings: 0,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      img:"p5.png",
      link: "https://www.display.land/s/5wHmnqZDRwFlv61y6HCZjU?_branch_match_id=629742221606675438"

    },
    {
      id: 6,
      title: 'Yamaha Nmax155',
      description: 'Greetings, my bike is available for rent. Please contact me',
      price: 110,
      ratings: 0,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      img:"p6.png",
      link: "https://www.display.land/s/6zT7VL2Pd33daccmzHRyX2?_branch_match_id=629742221606675438"

    },
  ],
  userInfo: {
    isLoggedIn: false,
    isSignedUp: false,
    hasSearched: false,
    name: '',
    productTitleSearched: ''
  },
  systemInfo: {
    openLoginModal: false,
    openSignupModal: false,
    openCheckoutModal: false
  }
})

export const getters = {
  productsAdded: state => {
    return state.products.filter(el => {
      return el.isAddedToCart;
    });
  },
  productsAddedToFavourite: state => {
    return state.products.filter(el => {
      return el.isFavourite;
    });
  },
  getProductById: state => id => {
    return state.products.find(product => product.id == id);
  },
  isUserLoggedIn: state => {
    return state.userInfo.isLoggedIn;
  },
  isUserSignedUp: state => {
    return state.userInfo.isSignedUp;
  },
  getUserName: state => {
    return state.userInfo.name;
  },
  isLoginModalOpen: state => {
    return state.systemInfo.openLoginModal;
  },
  isSignupModalOpen: state => {
    return state.systemInfo.openSignupModal;
  },
  isCheckoutModalOpen: state => {
    return state.systemInfo.openCheckoutModal;
  },
  quantity: state => {
    return state.products.quantity;
  }
}

export const mutations = {
  addToCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = true;
      }
    });
  },
  setAddedBtn: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.isAddedBtn = data.status;
      }
    });
  },
  removeFromCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = false;
      }
    });
  },
  removeProductsFromFavourite: state => {
    state.products.filter(el => {
      el.isFavourite = false;
    });
  },
  isUserLoggedIn: (state, isUserLoggedIn) => {
    state.userInfo.isLoggedIn = isUserLoggedIn;
  },
  isUserSignedUp: (state, isSignedUp) => {
    state.userInfo.isSignedUp = isSignedUp;
  },
  setHasUserSearched: (state, hasSearched) => {
    state.userInfo.hasSearched = hasSearched;
  },
  setUserName: (state, name) => {
    state.userInfo.name = name;
  },
  setProductTitleSearched: (state, titleSearched) => {
    state.userInfo.productTitleSearched = titleSearched;
  },
  showLoginModal: (state, show) => {
    state.systemInfo.openLoginModal = show;
  },
  showSignupModal: (state, show) => {
    state.systemInfo.openSignupModal = show;
  },
  showCheckoutModal: (state, show) => {
    state.systemInfo.openCheckoutModal = show;
  },
  addToFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = true;
      }
    });
  },
  removeFromFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = false;
      }
    });
  },
  quantity: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.quantity = data.quantity;
      }
    });
  },
  SET_USER(state, authUser) {
    state.authUser = authUser
  }
}
/* 
export const actions = {
  async nuxtServerInit({ commit }) {
    const res = await this.$axios.get("/api/current_user")
    commit("SET_USER", res.data)
  },

  async logout({ commit }) {
    const { data } = await this.$axios.get("/api/logout")
    if (data.ok) commit("SET_USER", null)
  },

  async handleToken({ commit }, token) {
    const res = await this.$axios.post("/api/stripe", token)
    commit("SET_USER", res.data)
  }
} */
