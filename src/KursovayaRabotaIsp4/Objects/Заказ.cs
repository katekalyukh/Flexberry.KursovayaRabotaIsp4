﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.KursovayaRabotaIsp4
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Печать фото.
    /// </summary>
    // *** Start programmer edit section *** (Заказ CustomAttributes)

    // *** End programmer edit section *** (Заказ CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаказE", new string[] {
            "НомерЗаказа as \'Номер заказа\'",
            "Носитель as \'Носитель\'"})]
    [AssociatedDetailViewAttribute("ЗаказE", "Фото", "ФотоL", false, "", "", true, new string[] {
            ""})]
    [View("ЗаказL", new string[] {
            "НомерЗаказа as \'Номер заказа\'",
            "Носитель as \'Носитель\'"})]
    [AssociatedDetailViewAttribute("ЗаказL", "Фото", "ФотоL", false, "", "", true, new string[] {
            ""})]
    public class Заказ : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерЗаказа;
        
        private IIS.KursovayaRabotaIsp4.ВидНосителя fНоситель;
        
        private IIS.KursovayaRabotaIsp4.Клиент fКлиент;
        
        private IIS.KursovayaRabotaIsp4.Фотокиоск fФотокиоск;
        
        private IIS.KursovayaRabotaIsp4.DetailArrayOfФото fФото;
        
        // *** Start programmer edit section *** (Заказ CustomMembers)

        // *** End programmer edit section *** (Заказ CustomMembers)

        
        /// <summary>
        /// НомерЗаказа.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.НомерЗаказа CustomAttributes)

        // *** End programmer edit section *** (Заказ.НомерЗаказа CustomAttributes)
        public virtual int НомерЗаказа
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.НомерЗаказа Get start)

                // *** End programmer edit section *** (Заказ.НомерЗаказа Get start)
                int result = this.fНомерЗаказа;
                // *** Start programmer edit section *** (Заказ.НомерЗаказа Get end)

                // *** End programmer edit section *** (Заказ.НомерЗаказа Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.НомерЗаказа Set start)

                // *** End programmer edit section *** (Заказ.НомерЗаказа Set start)
                this.fНомерЗаказа = value;
                // *** Start programmer edit section *** (Заказ.НомерЗаказа Set end)

                // *** End programmer edit section *** (Заказ.НомерЗаказа Set end)
            }
        }
        
        /// <summary>
        /// Носитель.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Носитель CustomAttributes)

        // *** End programmer edit section *** (Заказ.Носитель CustomAttributes)
        public virtual IIS.KursovayaRabotaIsp4.ВидНосителя Носитель
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Носитель Get start)

                // *** End programmer edit section *** (Заказ.Носитель Get start)
                IIS.KursovayaRabotaIsp4.ВидНосителя result = this.fНоситель;
                // *** Start programmer edit section *** (Заказ.Носитель Get end)

                // *** End programmer edit section *** (Заказ.Носитель Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Носитель Set start)

                // *** End programmer edit section *** (Заказ.Носитель Set start)
                this.fНоситель = value;
                // *** Start programmer edit section *** (Заказ.Носитель Set end)

                // *** End programmer edit section *** (Заказ.Носитель Set end)
            }
        }
        
        /// <summary>
        /// Печать фото.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Клиент CustomAttributes)

        // *** End programmer edit section *** (Заказ.Клиент CustomAttributes)
        [PropertyStorage(new string[] {
                "Клиент"})]
        [NotNull()]
        public virtual IIS.KursovayaRabotaIsp4.Клиент Клиент
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Клиент Get start)

                // *** End programmer edit section *** (Заказ.Клиент Get start)
                IIS.KursovayaRabotaIsp4.Клиент result = this.fКлиент;
                // *** Start programmer edit section *** (Заказ.Клиент Get end)

                // *** End programmer edit section *** (Заказ.Клиент Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Клиент Set start)

                // *** End programmer edit section *** (Заказ.Клиент Set start)
                this.fКлиент = value;
                // *** Start programmer edit section *** (Заказ.Клиент Set end)

                // *** End programmer edit section *** (Заказ.Клиент Set end)
            }
        }
        
        /// <summary>
        /// Печать фото.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Фотокиоск CustomAttributes)

        // *** End programmer edit section *** (Заказ.Фотокиоск CustomAttributes)
        [PropertyStorage(new string[] {
                "Фотокиоск"})]
        [NotNull()]
        public virtual IIS.KursovayaRabotaIsp4.Фотокиоск Фотокиоск
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Фотокиоск Get start)

                // *** End programmer edit section *** (Заказ.Фотокиоск Get start)
                IIS.KursovayaRabotaIsp4.Фотокиоск result = this.fФотокиоск;
                // *** Start programmer edit section *** (Заказ.Фотокиоск Get end)

                // *** End programmer edit section *** (Заказ.Фотокиоск Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Фотокиоск Set start)

                // *** End programmer edit section *** (Заказ.Фотокиоск Set start)
                this.fФотокиоск = value;
                // *** Start programmer edit section *** (Заказ.Фотокиоск Set end)

                // *** End programmer edit section *** (Заказ.Фотокиоск Set end)
            }
        }
        
        /// <summary>
        /// Печать фото.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Фото CustomAttributes)

        // *** End programmer edit section *** (Заказ.Фото CustomAttributes)
        public virtual IIS.KursovayaRabotaIsp4.DetailArrayOfФото Фото
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Фото Get start)

                // *** End programmer edit section *** (Заказ.Фото Get start)
                if ((this.fФото == null))
                {
                    this.fФото = new IIS.KursovayaRabotaIsp4.DetailArrayOfФото(this);
                }
                IIS.KursovayaRabotaIsp4.DetailArrayOfФото result = this.fФото;
                // *** Start programmer edit section *** (Заказ.Фото Get end)

                // *** End programmer edit section *** (Заказ.Фото Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Фото Set start)

                // *** End programmer edit section *** (Заказ.Фото Set start)
                this.fФото = value;
                // *** Start programmer edit section *** (Заказ.Фото Set end)

                // *** End programmer edit section *** (Заказ.Фото Set end)
            }
        }
        
        // *** Start programmer edit section *** (Заказ.ПечатьФото CustomAttributes)

        // *** End programmer edit section *** (Заказ.ПечатьФото CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void ПечатьФото()
        {
            // *** Start programmer edit section *** (Заказ.ПечатьФото method implementation)

            return;
            // *** End programmer edit section *** (Заказ.ПечатьФото method implementation)
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаказE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказE", typeof(IIS.KursovayaRabotaIsp4.Заказ));
                }
            }
            
            /// <summary>
            /// "ЗаказL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказL", typeof(IIS.KursovayaRabotaIsp4.Заказ));
                }
            }
        }
    }
}
