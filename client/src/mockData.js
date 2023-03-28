export const queryListMock = [
    {id:1, date:'02.13.2023', body:"Потрібно оновити запаси", checked:true, washId:334 },
    {id:2, date:'02.23.2023', body:"Потрібно оновити запаси", checked:true, washId:334 },
    {id:3, date:'02.31.2023', body:"Потрібно оновити запаси", checked:true, washId:334 },
    {id:4, date:'03.03.2023', body:"Потрібно Зробити техогляд ", checked:false,washId:335 },
    {id:5, date:'12.26.2023', body:"Потрібно оновити термінал", checked:true,washId:324 },
    {id:6, date:'11.22.2023', body:"Закінчилось у запаси", checked:false,washId:134 },
]
export const reportListMock = [
    {id:1, date:'02.13.2023', body:"Тижневий звіт", costs:1200, income:5120, washId:334 },
    {id:2, date:'03.03.2023', body:"Тижневий звіт ", costs:1469, income:4323, washId:334  },
    {id:3, date:'12.26.2023', body:"Тижневий звіт", costs:1345, income:3553, washId:335  },
    {id:4, date:'11.22.2023', body:"Тижневий звіт", costs:1786, income:4130, washId:324  },
]
export const washListMock = [
    {id:334, location:'м.Київ, вул. Січових Стрільців 12', workStatus:true},
    {id:335, location:'м.Черкаси, вул. Шевченка 11', workStatus:true},
    {id:324, location:'м.Полтава, вул. Мазепи 23', workStatus:false},
    {id:134, location:'м.Київ, вул. Петра Сагайдачного 29', workStatus:true}
]