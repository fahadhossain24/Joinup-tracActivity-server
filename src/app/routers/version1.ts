import express from 'express';
import userRouter from '../modules/userModule/user.routes';
import adminRouter from '../modules/adminModule/admin.routes';
import userAuthRouter from '../modules/authModule/userAuthModule/auth.routes';
import adminAuthRouter from '../modules/authModule/adminAuthModule/auth.routes';
import aboutUsRouter from '../modules/aboutUsModule/abountUs.routes';
import privacyPolicyRouter from '../modules/privacyPolicyModule/privacyPolicy.routes';
import termsConditionRouter from '../modules/termsConditionModule/termsCondition.routes';
import onboardingRouter from '../modules/onboardingModule/onboarding.routes';

const routersVersionOne = express.Router();

routersVersionOne.use('/user', userRouter);
routersVersionOne.use('/user/auth', userAuthRouter);
routersVersionOne.use('/about-us', aboutUsRouter)
routersVersionOne.use('/privacy-policy', privacyPolicyRouter)
routersVersionOne.use('/terms-condition', termsConditionRouter)
routersVersionOne.use('/onboarding', onboardingRouter)
routersVersionOne.use('/admin', adminRouter);
routersVersionOne.use('/admin/auth', adminAuthRouter);

export default routersVersionOne;