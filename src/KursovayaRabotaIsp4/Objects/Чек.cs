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
    /// Оплата.
    /// </summary>
    // *** Start programmer edit section *** (Чек CustomAttributes)

    // *** End programmer edit section *** (Чек CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЧекE", new string[] {
            "Заказ as \'Заказ\'",
            "Заказ.НомерЗаказа as \'Номер заказа\'",
            "ВремяОплаты as \'Время оплаты\'",
            "ДатаОплаты as \'Дата оплаты\'",
            "Сумма as \'Сумма\'"})]
    [View("ЧекL", new string[] {
            "Заказ.НомерЗаказа as \'Заказ\'",
            "ВремяОплаты as \'Время оплаты\'",
            "ДатаОплаты as \'Дата оплаты\'",
            "Сумма as \'Сумма\'"})]
    public class Чек : ICSSoft.STORMNET.DataObject
    {
        
        private string fВремяОплаты;
        
        private System.DateTime fДатаОплаты;
        
        private int fСумма;
        
        private IIS.KursovayaRabotaIsp4.Заказ fЗаказ;
        
        // *** Start programmer edit section *** (Чек CustomMembers)

        // *** End programmer edit section *** (Чек CustomMembers)

        
        /// <summary>
        /// ВремяОплаты.
        /// </summary>
        // *** Start programmer edit section *** (Чек.ВремяОплаты CustomAttributes)

        // *** End programmer edit section *** (Чек.ВремяОплаты CustomAttributes)
        [StrLen(255)]
        public virtual string ВремяОплаты
        {
            get
            {
                // *** Start programmer edit section *** (Чек.ВремяОплаты Get start)

                // *** End programmer edit section *** (Чек.ВремяОплаты Get start)
                string result = this.fВремяОплаты;
                // *** Start programmer edit section *** (Чек.ВремяОплаты Get end)

                // *** End programmer edit section *** (Чек.ВремяОплаты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Чек.ВремяОплаты Set start)

                // *** End programmer edit section *** (Чек.ВремяОплаты Set start)
                this.fВремяОплаты = value;
                // *** Start programmer edit section *** (Чек.ВремяОплаты Set end)

                // *** End programmer edit section *** (Чек.ВремяОплаты Set end)
            }
        }
        
        /// <summary>
        /// ДатаОплаты.
        /// </summary>
        // *** Start programmer edit section *** (Чек.ДатаОплаты CustomAttributes)

        // *** End programmer edit section *** (Чек.ДатаОплаты CustomAttributes)
        public virtual System.DateTime ДатаОплаты
        {
            get
            {
                // *** Start programmer edit section *** (Чек.ДатаОплаты Get start)

                // *** End programmer edit section *** (Чек.ДатаОплаты Get start)
                System.DateTime result = this.fДатаОплаты;
                // *** Start programmer edit section *** (Чек.ДатаОплаты Get end)

                // *** End programmer edit section *** (Чек.ДатаОплаты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Чек.ДатаОплаты Set start)

                // *** End programmer edit section *** (Чек.ДатаОплаты Set start)
                this.fДатаОплаты = value;
                // *** Start programmer edit section *** (Чек.ДатаОплаты Set end)

                // *** End programmer edit section *** (Чек.ДатаОплаты Set end)
            }
        }
        
        /// <summary>
        /// Сумма.
        /// </summary>
        // *** Start programmer edit section *** (Чек.Сумма CustomAttributes)

        // *** End programmer edit section *** (Чек.Сумма CustomAttributes)
        public virtual int Сумма
        {
            get
            {
                // *** Start programmer edit section *** (Чек.Сумма Get start)

                // *** End programmer edit section *** (Чек.Сумма Get start)
                int result = this.fСумма;
                // *** Start programmer edit section *** (Чек.Сумма Get end)

                // *** End programmer edit section *** (Чек.Сумма Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Чек.Сумма Set start)

                // *** End programmer edit section *** (Чек.Сумма Set start)
                this.fСумма = value;
                // *** Start programmer edit section *** (Чек.Сумма Set end)

                // *** End programmer edit section *** (Чек.Сумма Set end)
            }
        }
        
        /// <summary>
        /// Оплата.
        /// </summary>
        // *** Start programmer edit section *** (Чек.Заказ CustomAttributes)

        // *** End programmer edit section *** (Чек.Заказ CustomAttributes)
        [PropertyStorage(new string[] {
                "Заказ"})]
        [NotNull()]
        public virtual IIS.KursovayaRabotaIsp4.Заказ Заказ
        {
            get
            {
                // *** Start programmer edit section *** (Чек.Заказ Get start)

                // *** End programmer edit section *** (Чек.Заказ Get start)
                IIS.KursovayaRabotaIsp4.Заказ result = this.fЗаказ;
                // *** Start programmer edit section *** (Чек.Заказ Get end)

                // *** End programmer edit section *** (Чек.Заказ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Чек.Заказ Set start)

                // *** End programmer edit section *** (Чек.Заказ Set start)
                this.fЗаказ = value;
                // *** Start programmer edit section *** (Чек.Заказ Set end)

                // *** End programmer edit section *** (Чек.Заказ Set end)
            }
        }
        
        // *** Start programmer edit section *** (Чек.ПечатьЧека CustomAttributes)

        // *** End programmer edit section *** (Чек.ПечатьЧека CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void ПечатьЧека()
        {
            // *** Start programmer edit section *** (Чек.ПечатьЧека method implementation)

            return;
            // *** End programmer edit section *** (Чек.ПечатьЧека method implementation)
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЧекE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЧекE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЧекE", typeof(IIS.KursovayaRabotaIsp4.Чек));
                }
            }
            
            /// <summary>
            /// "ЧекL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЧекL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЧекL", typeof(IIS.KursovayaRabotaIsp4.Чек));
                }
            }
        }
    }
}
