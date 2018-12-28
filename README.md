# promo-generator


promo-generator provides the ability to generate coupon codes on various parameters. It generates unique, random,and hard to guess coupon codes.


Use cases: programmable building blocks for promo codes, loyalty coupons, gift vouchers, in-app purchases, referral links


### Installation

#### In Node.js

Install with npm:

```

```

Include with require:

```

```


### Usage

Generate 10 codes, each 7 characters long:
```
promo.generateCoupons({
    length: 7,
    count: 5
});
```

Sample result: `[ 'TB463FD','5M98TE2','CGVHFTT','LI49DVH','SNB7F4S' ]`






### Testing

Install dependencies:

```
npm install
```

Run tests:

```
npm run test
```

### License

Code released under the [MIT license](LICENSE).
