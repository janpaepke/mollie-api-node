declare namespace Mollie {
  interface ICustomer {
    resource: string;
    id: string;
    mode: ApiMode;
    name: string;
    email: string;
    locale: Locale;
    recentlyUsedMethods: Array<Method>;
    metadata: any;
    createdAt: string;
    _links: ILinks;

    // Access token parameters
    testmode?: boolean;
  }

  namespace Customer {
    namespace Params {
      interface ICreate {
        name?: string;
        email?: string;
        locale: Locale;
        metadata?: any;

        // Access token parameters
        testmode?: boolean;
      }

      interface IGet {
        // Access token parameters
        testmode?: boolean;
      }

      interface IUpdate {
        name?: string;
        email?: string;
        locale?: Locale;
        metadata?: any;

        // Access token parameters
        testmode?: boolean;
      }

      interface IDelete {
        // Access token parameters
        testmode?: boolean;
      }

      interface IList {
        from?: string;
        limit?: number;
      }
    }

    namespace Callback {
      type Create = (error: any, customer: ICustomer) => void;
      type Get = (error: any, customer: ICustomer) => void;
      type Update = (error: any, customer: ICustomer) => void;
      type Delete = (error: any, success: boolean) => void;
      type List = (error: any, customers: Mollie.List<ICustomer>) => void;
    }
  }

  namespace CustomerPayments {
    namespace Params {
      interface ICreate {
        customerId: string;

        name?: string;
        email?: string;
        locale: Locale;
        metadata?: any;

        // Access token parameters
        testmode?: boolean;
      }

      interface IList {
        customerId: string;

        from?: string;
        limit?: number;

        // Access token parameters
        testmode?: boolean;
      }
    }

    namespace Callback {
      type Create = (error: any, customer: ICustomer) => void;
      type List = (error: any, customers: Mollie.List<ICustomer>) => void;
    }
  }
}
